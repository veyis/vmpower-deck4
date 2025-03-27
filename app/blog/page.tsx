import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/data/blogPosts'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'VM Power Deck Blog | Expert Advice on Outdoor Living',
  description:
    "Discover expert tips, trends, and insights on deck building, outdoor living, and home improvement from VM Power Deck's professional team.",
  openGraph: {
    title: 'VM Power Deck Blog | Expert Advice on Outdoor Living',
    description:
      "Discover expert tips, trends, and insights on deck building, outdoor living, and home improvement from VM Power Deck's professional team.",
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-4 bg-gradient-to-b from-primary/10 to-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
          <h1 className='text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
            VM Power Deck Blog
          </h1>
          <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Stay up-to-date with the latest trends, tips, and insights in
            outdoor living and deck construction.
          </p>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className='flex flex-col hover:shadow-lg transition-shadow duration-300'
              >
                <CardHeader className='p-0'>
                  <Image
                    src={post.image || '/images/placeholder.svg'}
                    alt={post.title}
                    width={400}
                    height={300}
                    className='w-full h-48 object-cover rounded-t-lg'
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    quality={80}
                    unoptimized={true}
                  />
                </CardHeader>
                <CardContent className='flex-grow p-6'>
                  <div className='flex items-center justify-between text-sm text-muted-foreground mb-2'>
                    <span className='flex items-center'>
                      <CalendarIcon className='w-4 h-4 mr-1' />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className='flex items-center'>
                      <Clock className='w-4 h-4 mr-1' />
                      {post.readTime} min read
                    </span>
                  </div>
                  <CardTitle className='text-2xl mb-2 hover:text-primary transition-colors duration-300'>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <p className='text-muted-foreground mb-4'>{post.excerpt}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button asChild className='w-full group'>
                    <Link href={`/blog/${post.id}`}>
                      Read about {post.title}
                      <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
