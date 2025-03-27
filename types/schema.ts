import type { BlogPost } from './index'

export interface BlogPosting extends BlogPost {
  '@type': 'BlogPosting'
  mainEntityOfPage: string
  publisher: BlogPosting
  image: string
  dateModified: string
  articleBody: string
  headline: string
  datePublished: string
  description: string
  author:
    | string
    | {
        '@type': 'Person'
        name: string
      }
  keywords: string[]
  '@context': 'https://schema.org'
}
