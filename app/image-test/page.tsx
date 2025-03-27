'use client'

import Image from 'next/image'

export default function ImageTestPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Simple Image Test</h1>

      <div className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>Original Image Path</h2>
        <div className='relative w-full h-[400px]'>
          <picture>
            {/* AVIF version for modern browsers */}
            <source
              type="image/avif"
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw'
              srcSet="/images/hero-deck41-400.avif 400w, /images/hero-deck41-600.avif 600w"
            />
            {/* WebP fallback */}
            <source
              type="image/webp"
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw'
              srcSet="/images/hero-deck41-400.webp 400w, /images/hero-deck41-600.webp 600w"
            />
            <Image
              src='/images/hero-deck41-600.webp'
              alt='Hero deck image'
              fill
              className='object-cover'
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw'
              quality={85}
            />
          </picture>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>Optimized Image Path</h2>
        <div className='relative w-full h-[400px]'>
          <Image
            src='/images/hero-deck-1-optimized.webp'
            alt='Hero deck image optimized'
            fill
            className='object-cover'
            sizes='100vw'
            unoptimized={true}
          />
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>Unoptimized Image Component</h2>
        <div className='relative w-full h-[400px]'>
          <Image
            src='/images/hero-deck-1-optimized.webp'
            alt='Hero deck image with unoptimized prop'
            fill
            className='object-cover'
            sizes='100vw'
            unoptimized={true}
          />
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>Regular Image Tag</h2>
        <div className='relative w-full h-[400px]'>
          <Image
            src='/images/hero-deck-1-optimized.webp'
            alt='Hero deck image optimized with regular img tag'
            fill
            className='object-cover'
            sizes='100vw'
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  )
}
