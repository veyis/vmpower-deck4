import { services } from "@/data/services"
import { blogPosts } from "@/data/blogPosts"
import { materialCategories } from "@/data/materials"

type SearchResult = {
  id: string
  title: string
  description: string
  url: string
  type: "service" | "blog" | "material"
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  const normalizedQuery = query.toLowerCase()

  const serviceResults = services.flatMap((service) =>
    service.name.toLowerCase().includes(normalizedQuery) || service.description.toLowerCase().includes(normalizedQuery)
      ? [
          {
            id: service.id,
            title: service.name,
            description: service.description,
            url: `/services/${service.id}`,
            type: "service" as const,
          },
        ]
      : [],
  )

  const blogResults = blogPosts.flatMap((post) =>
    post.title.toLowerCase().includes(normalizedQuery) || post.excerpt.toLowerCase().includes(normalizedQuery)
      ? [
          {
            id: post.id,
            title: post.title,
            description: post.excerpt,
            url: `/blog/${post.id}`,
            type: "blog" as const,
          },
        ]
      : [],
  )

  const materialResults = materialCategories.flatMap((category) =>
    category.name.toLowerCase().includes(normalizedQuery) ||
    category.description.toLowerCase().includes(normalizedQuery)
      ? [
          {
            id: category.name.toLowerCase().replace(/\s+/g, "-"),
            title: category.name,
            description: category.description,
            url: `/materials#${category.name.toLowerCase().replace(/\s+/g, "-")}`,
            type: "material" as const,
          },
        ]
      : [],
  )

  return [...serviceResults, ...blogResults, ...materialResults]
}

