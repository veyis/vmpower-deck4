'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Volume2, VolumeX } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

interface Video {
  id: string
  title: string
  description: string
  videoId: string
}

interface YouTubeCarouselProps {
  videos: Video[]
}

export function YouTubeCarousel({ videos }: YouTubeCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const [isMuted, setIsMuted] = useState(true)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRefs = useRef<Array<HTMLIFrameElement | null>>([])

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap()
      setCurrentIndex(newIndex)
      
      // Pause all videos when changing slides
      if (activeVideo !== null && activeVideo !== newIndex) {
        setActiveVideo(null)
        setIsPlaying(false)
      }
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api, activeVideo])

  // Auto-rotate on small screens, but only if no video is playing
  useEffect(() => {
    if (isSmallScreen && api && !isPlaying) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % videos.length
        api.scrollTo(nextIndex)
      }, 10000) // Change video every 10 seconds on small screens
      return () => clearInterval(interval)
    }
  }, [isSmallScreen, currentIndex, videos.length, api, isPlaying])

  const handlePlayVideo = (index: number) => {
    setActiveVideo(index)
    setIsPlaying(true)
  }

  return (
    <Carousel className='w-full max-w-5xl mx-auto' setApi={setApi}>
      <CarouselContent>
        {videos.map((video, index) => (
          <CarouselItem key={video.id} className='md:basis-1/2 lg:basis-1/3'>
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center text-center text-lg md:text-xl '>

                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='aspect-video mb-4 bg-muted relative rounded-md'>
                  {activeVideo === index ? (
                    <>
                      <iframe
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        width='100%'
                        height='100%'
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0`}
                        title={video.title}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded-md'
                        loading='lazy'
                      ></iframe>
                      {!isSmallScreen && (
                        <Button
                          variant='ghost'
                          size='sm'
                          className='absolute bottom-2 right-2 bg-background/80'
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? (
                            <VolumeX className='h-4 w-4' />
                          ) : (
                            <Volume2 className='h-4 w-4' />
                          )}
                          <span className='sr-only'>
                            {isMuted ? 'Unmute' : 'Mute'}
                          </span>
                        </Button>
                      )}
                    </>
                  ) : (
                    // Thumbnail placeholder
                    <div
                      className='absolute inset-0 cursor-pointer'
                      onClick={() => {
                        handlePlayVideo(index)
                        api?.scrollTo(index)
                      }}
                    >
                      {/* YouTube thumbnail */}
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                        alt={`Thumbnail for ${video.title}`}
                        className='object-cover rounded-md'
                        fill
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        loading={index === currentIndex ? 'eager' : 'lazy'}
                        onError={(e) => {
                          // Fallback to medium quality if maxresdefault is not available
                          ;(
                            e.target as HTMLImageElement
                          ).src = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`
                        }}
                      />
                      {/* Play button overlay */}
                      <div className='absolute inset-0 flex items-center justify-center bg-black/30 rounded-md'>
                        <div className='rounded-full bg-red-600 p-4'>
                          <span className='text-white text-lg font-semibold'>Play</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <p className='text-sm md:text-base text-muted-foreground'>
                  {video.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant='outline' className='w-full'>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Watch on YouTube
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='hidden sm:flex justify-center mt-4'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
