from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.contact import ContactSchema, ContactResponse
from app.models.contact import ContactSubmission


async def create_contact_submission(data: ContactSchema, session: AsyncSession) -> ContactResponse:
    submission = ContactSubmission(
        name=data.name,
        email=data.email,
        message=data.message,
        phone=data.phone,
    )
    session.add(submission)
    await session.commit()
    await session.refresh(submission)
    return submission
