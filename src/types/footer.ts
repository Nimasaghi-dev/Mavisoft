// Central type definitions for footer

export interface ContentBlock {
    h2?: string
    h3?: string
    h4?: string
    paragraphs: string[]
}

export interface ArticleItem {
    id: string
    title: string
    date: string
    image: string
    excerpt: string
    content: ContentBlock[]
    category?: string
    author?: string
    readTime?: string
}

export interface teamMember {
    name: string
    title: string
    image: string
    linkedin: string
}

export interface Link {
    label: string
    href: string
}

export interface SocialLink extends Link {
    icon: React.ReactNode
}

export interface ContactFormData {
    name: string
    email: string
    message:  string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export type ModalType = 
    | 'none'
    | 'about'
    | 'mission'
    | 'team'
    | 'press'
    | 'pressDetail'
    | 'blog'
    | 'blogDetail'
    | 'privacy'
    | 'terms'

export interface ModalState {
    currentModal : ModalType
    selectedArticle: ArticleItem | null
}