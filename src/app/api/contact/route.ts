import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import type { ContactFormData } from '@/types/footer'

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'nima@mavisoft.com'
const EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev'

function validateFormData(data: ContactFormData): string | null {
  if (!data.name || !data.email || !data.message) {
    return 'All fields are required'
  }
  if (data.name.trim().length < 2) {
    return 'Name must be at least 2 characters'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return 'Please enter a valid email address'
  }
  if (data.message.trim().length < 10) {
    return 'Message must be at least 10 characters'
  }
  if (data.message.length > 5000) {
    return 'Message is too long (max 5000 characters)'
  }
  return null
}

function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
            New Contact Form Submission
          </h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
            From mavisoft.com
          </p>
        </div>
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
            <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #6b7280; font-weight: 500;">
              Sender Information
            </h2>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #374151;">Name:</strong><br>
              <span style="color: #111827;">${escapeHtml(data.name)}</span>
            </p>
            <p style="margin: 0;">
              <strong style="color: #374151;">Email:</strong><br>
              <a href="mailto:${escapeHtml(data.email)}" style="color: #0891b2; text-decoration: none;">
                ${escapeHtml(data.email)}
              </a>
            </p>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #6b7280; font-weight: 500;">
              Message
            </h2>
            <p style="margin: 0; color: #111827; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
          </div>
        </div>
        <div style="padding: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
          <p style="margin: 0;">
            This email was sent from the contact form at mavisoft.com
          </p>
          <p style="margin: 8px 0 0 0;">
            Received on ${new Date().toLocaleString('en-NL', {
              timeZone: 'Europe/Amsterdam',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </p>
        </div>
      </body>
    </html>
  `
}

function generateEmailText(data: ContactFormData): string {
  return `
NEW CONTACT FORM SUBMISSION
============================

From: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
Received on ${new Date().toLocaleString('en-NL', {
  timeZone: 'Europe/Amsterdam',
  dateStyle: 'full',
  timeStyle: 'short'
})}
  `.trim()
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData

    const validationError = validateFormData(body)
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: `Mavisoft Contact Form <${EMAIL_FROM}>`,
      to: [EMAIL_TO],
      replyTo: body.email,
      subject: `New Contact: ${body.name}`,
      html: generateEmailHTML(body),
      text: generateEmailText(body),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data?.id)
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
