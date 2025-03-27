export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime: number
  image: string
  author:
    | string
    | {
        '@type': string
        name: string
      }
  tags: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}
