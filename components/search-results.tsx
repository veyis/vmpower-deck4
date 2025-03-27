'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { searchContent } from '@/lib/search'

type SearchResult = Awaited<ReturnType<typeof searchContent>>[number]

export function SearchResults() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery) {
        setIsLoading(true)
        const searchResults = await searchContent(searchQuery)
        setResults(searchResults)
        setIsLoading(false)
      } else {
        setResults([])
      }
    }

    performSearch()
  }, [searchQuery])

  if (isLoading) {
    return <p className='text-center'>Loading...</p>
  }

  if (results.length === 0 && searchQuery) {
    return (
      <p className='text-center'>
        No results found for &quot;{searchQuery}&quot;
      </p>
    )
  }

  if (results.length === 0) {
    return null
  }

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {results.map((result) => (
        <Card key={result.id}>
          <CardHeader>
            <CardTitle>{result.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              {result.description}
            </p>
            <p className='text-sm font-semibold mt-2'>Type: {result.type}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={result.url}>View {result.type}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
