'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchFormProps {
  initialQuery?: string
}

export function SearchForm({ initialQuery }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery || '')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className='mb-8'>
      <div className='flex gap-2'>
        <Input
          type='search'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='flex-grow'
        />
        <Button type='submit'>
          <Search className='mr-2 h-4 w-4' />
          Search
        </Button>
      </div>
    </form>
  )
}
