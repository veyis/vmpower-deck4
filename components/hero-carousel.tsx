'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

// First item is the most important for LCP - use smaller images for faster loading
const firstCarouselItem = {
  image: '/images/hero-deck-0.webp', // Main image
  imageAvif: '/images/hero-deck-0.avif', // AVIF version for better compression
  imageSm: '/images/hero-deck-0-sm.webp', // Small version for mobile
  imageSmAvif: '/images/hero-deck-0-sm.webp', // AVIF small version for mobile
  title: 'Custom Deck Design & Construction',
  subtitle: 'Transform Your Outdoor Living Space with Expert Craftsmanship',
  alt: 'Beautiful custom deck with outdoor furniture',
  // Add explicit dimensions to help browser calculate aspect ratio early
  width: 1920,
  height: 1080,
}

// Other items can be loaded later
const otherCarouselItems = [
  {
    image: '/images/deck8.webp',
    title: 'Luxurious Patio Installations',
    subtitle:
      'Create Your Perfect Outdoor Retreat for Relaxation and Entertainment',
    alt: 'Elegant patio with fire pit and seating area',
  },
  {
    image: '/images/hero-outdoor-kitchen-1.webp',
    title: 'Outdoor Kitchen & Living Areas',
    subtitle:
      'Elevate Your Backyard with Functional and Stylish Outdoor Kitchens',
    alt: 'Modern outdoor kitchen with grill and bar area',
  },
  {
    image: '/images/hero-pergola-11.webp',
    title: 'Custom Pergolas & Shade Structures',
    subtitle:
      'Add Beauty and Comfort to Your Outdoor Space with Expertly Crafted Pergolas',
    alt: 'Wooden pergola with climbing plants and outdoor seating',
  },
]

// Simple blur data URL for placeholder - using a smaller, more efficient data URL
const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7sgAAAABJRU5ErkJggg=='

export function HeroCarousel() {
  // Use state to track if the component has mounted
  const [mounted, setMounted] = React.useState(false)
  
  // Setup autoplay plugin
  const autoplay = React.useMemo(() => Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }), [])
  
  // Defer carousel initialization to after first paint
  React.useEffect(() => {
    // Use requestIdleCallback or setTimeout to defer non-critical initialization
    const id = window.setTimeout(() => {
      setMounted(true)
    }, 1000) // Delay carousel initialization to prioritize LCP
    
    return () => window.clearTimeout(id)
  }, [])

  // Combine items for rendering
  const carouselItems = React.useMemo(
    () => [firstCarouselItem, ...otherCarouselItems],
    []
  )

  // Only render full carousel after mounting
  return (
    <section className='w-full'>
      {!mounted ? (
        // Render static hero first for better LCP
        <div className='relative w-full h-[60vh] min-h-[400px] max-h-[600px]'>
          <div className='w-full h-full relative'>
            {/* Use picture element for art direction */}
            <picture>
              {/* Mobile version - smaller image for faster loading */}
              <source
                media="(max-width: 640px)"
                srcSet="/images/hero-deck-0-sm.avif 640w, /images/hero-deck-0.avif 1920w"
                type="image/avif"
                sizes="100vw"
              />
              <source
                media="(max-width: 640px)"
                srcSet="/images/hero-deck-0-sm.webp 640w, /images/hero-deck-0.webp 1920w"
                type="image/webp"
                sizes="100vw"
              />
              {/* Desktop version - AVIF for better compression */}
              <source
                srcSet="/images/hero-deck-0-sm.avif 640w, /images/hero-deck-0.avif 1920w"
                type="image/avif"
                sizes="100vw"
              />
              {/* Desktop version - WebP fallback */}
              <Image
                src="/images/hero-deck-0.webp"
                alt={firstCarouselItem.alt}
                fill
                className='object-cover'
                sizes="100vw"
                quality={85}
                priority={true}
                fetchPriority='high'
                loading="eager"
                decoding="async"
                onLoad={() => {
                  // Report LCP as soon as the image loads
                  if (window.performance && 'measure' in window.performance) {
                    window.performance.measure('lcp-hero-image-loaded');
                  }
                }}
              />
            </picture>
          </div>
          {/* Overlay - simplified for faster rendering */}
          <div className='absolute inset-0 bg-black/40' />
          {/* Content - simplified for faster rendering */}
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 bg-black/50 p-2 rounded-md'>
                {firstCarouselItem.title}
              </h1>
              <p className='text-lg md:text-xl text-gray-200 bg-black/20 p-2 rounded-md mb-4 md:mb-6'>
                {firstCarouselItem.subtitle}
              </p>
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='group bg-yellow-500 hover:bg-yellow-600 text-black'
                >
                  Get a Free Quote
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Carousel className='relative w-full' opts={{ loop: true }} plugins={[autoplay]}>
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className='relative w-full h-[60vh] min-h-[400px] max-h-[600px]'>
                  <div className='w-full h-full relative'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className='object-cover'
                      sizes='100vw'
                      quality={index === 0 ? 75 : 70}
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      placeholder='blur'
                      blurDataURL={blurDataURL}
                      decoding='async'
                    />
                  </div>
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/40' />
                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6'>
                    <div className='max-w-4xl mx-auto'>
                      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 bg-black/50 p-2 rounded-md'>
                        {item.title}
                      </h2>
                      <p className='text-lg md:text-xl text-gray-200 bg-black/20 p-2 rounded-md mb-4 md:mb-6'>
                        {item.subtitle}
                      </p>
                      <Link href='/contact'>
                        <Button
                          size='lg'
                          className='group bg-yellow-500 hover:bg-yellow-600 text-black'
                        >
                          Get a Free Quote
                          <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className='absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex' />
          <CarouselNext className='absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:flex' />
        </Carousel>
      )}
    </section>
  )
}
