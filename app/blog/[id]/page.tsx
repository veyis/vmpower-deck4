import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CalendarIcon,
  Clock,
  ArrowLeft,
  Share2,
  ThumbsUp,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { Metadata } from 'next'
import { JsonLd } from 'react-schemaorg'
import type { BlogPosting, WithContext } from 'schema-dts'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { blogPosts } from '@/data/blogPosts'
import { Breadcrumb } from '@/components/breadcrumb'
import type { BlogPost } from '@/types'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const ogImage = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/api/og?title=${encodeURIComponent(post.title)}`

  return {
    title: `${post.title} | VM Power Deck Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.vmpowerdecks.com/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [
        typeof post.author === 'string' ? post.author : post.author.name,
      ],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id) as BlogPost | undefined

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.id === post.id)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  const authorName =
    typeof post.author === 'string' ? post.author : post.author.name

  const jsonLdData: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image || '/images/placeholder.svg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'VM Power Deck',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`,
    },
  }

  return (
    <>
      <JsonLd<BlogPosting> item={jsonLdData} />
      <article className='py-16 bg-gradient-to-b from-primary/5 to-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title, href: `/blog/${post.id}` },
              ]}
            />
            <Button
              variant='ghost'
              className='mb-8 hover:bg-primary/10'
              asChild
            >
              <Link href='/blog'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Blog
              </Link>
            </Button>
            <Image
              src={post.image || '/images/placeholder.svg'}
              alt={`Featured image for ${post.title}`}
              width={1200}
              height={600}
              className='w-full h-[400px] object-cover rounded-xl shadow-lg mb-8'
              priority
              sizes='(max-width: 768px) 100vw, 1200px'
              quality={85}
              unoptimized={true}
            />
            <div className='bg-card rounded-lg p-8 shadow-md'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4 text-primary'>
                {post.title}
              </h1>
              <div className='flex flex-wrap items-center justify-between text-sm text-muted-foreground mb-8'>
                <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                  <Avatar>
                    <AvatarImage
                      src='/images/placeholder-user.webp'
                      alt={authorName}
                    />
                    <AvatarFallback>{authorName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold text-foreground'>
                      {authorName}
                    </p>
                    <div className='flex items-center space-x-2'>
                      <CalendarIcon className='w-4 h-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className='w-4 h-4 ml-2' />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button variant='outline' size='sm'>
                    <Share2 className='w-4 h-4 mr-2' />
                    Share
                  </Button>
                </div>
              </div>
              <div
                className='prose prose-lg max-w-none mb-12'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Separator className='my-8' />
              <div className='flex flex-wrap items-center justify-between'>
                <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                  <Button variant='outline' size='sm'>
                    <ThumbsUp className='w-4 h-4 mr-2' />
                    Like
                  </Button>
                  <Button variant='outline' size='sm'>
                    <MessageSquare className='w-4 h-4 mr-2' />
                    Comment
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant='secondary'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator className='my-8' />
              <div className='flex flex-col sm:flex-row justify-between items-center mb-12'>
                <div className='flex space-x-4'>
                  {prevPost && (
                    <Link
                      href={`/blog/${prevPost.id}`}
                      className='flex items-center text-primary hover:underline'
                    >
                      <ChevronLeft className='w-4 h-4 mr-2' />
                      Previous Post
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.id}`}
                      className='flex items-center text-primary hover:underline'
                    >
                      Next Post
                      <ChevronRight className='w-4 h-4 ml-2' />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <h2 className='text-3xl font-bold mt-16 mb-8'>Related Posts</h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className='hover:shadow-lg transition-shadow duration-300'
                >
                  <CardContent className='p-6'>
                    <Image
                      src={relatedPost.image || '/images/placeholder.svg'}
                      alt={`Featured image for ${relatedPost.title}`}
                      width={300}
                      height={200}
                      className='w-full h-48 object-cover rounded-md mb-4'
                      loading='lazy'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px'
                      quality={80}
                      unoptimized={true}
                    />
                    <h3 className='text-xl font-semibold mb-2'>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className='hover:text-primary transition-colors duration-300'
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className='text-sm text-muted-foreground mb-4'>
                      {relatedPost.excerpt}
                    </p>
                    <div className='flex items-center justify-between text-sm text-muted-foreground'>
                      <div className='flex items-center'>
                        <CalendarIcon className='w-4 h-4 mr-2' />
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Clock className='w-4 h-4 mr-2' />
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
