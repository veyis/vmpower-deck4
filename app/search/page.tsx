import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { SearchForm } from '@/components/search-form'
import { SearchResults } from '@/components/search-results'

export const metadata: Metadata = {
  title: 'Search VM Power Deck | Find Outdoor Living Solutions',
  description:
    'Search VM Power Deck for expert advice, services, and inspiration for your outdoor living projects in PA and NJ. Discover decks, patios, and more!',
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface SearchParams {
  [key: string]: string | string[] | undefined
}

export default async function SearchPage({ searchParams }: any) {
  const query =
    typeof (await searchParams)?.q === 'string' ? (await searchParams).q : ''

  return (
    <div className='container mx-auto px-4 py-12'>
      <Breadcrumb items={[{ label: 'Search', href: '/search' }]} />
      <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
        {query ? `Search Results for "${query}"` : 'Search'}
      </h1>
      <SearchForm initialQuery={query} />
      <Suspense fallback={<p className='text-center'>Loading...</p>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
