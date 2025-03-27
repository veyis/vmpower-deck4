'use client'

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  ThumbsUp,
  PenToolIcon as Tool,
  Zap,
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Breadcrumb } from '@/components/breadcrumb'
import { JsonLd } from 'react-schemaorg'
import type { ItemList } from 'schema-dts'
import { useState } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const projects = [
  {
    id: 1,
    title: 'Lehigh Valley Luxury Deck',
    location: 'Allentown, PA',
    category: 'Deck Construction',
    description:
      'A multi-level composite deck with built-in lighting and a pergola, perfect for entertaining in the Lehigh Valley.',
    images: [
      '/images/deck40.webp',
      '/images/deck41.webp',
      '/images/deck42.webp',
    ],
    features: [
      'Composite decking',
      'Built-in LED lighting',
      'Custom pergola',
      'Glass railing system',
    ],
    completionDate: 'June 2023',
    budget: '$30,000 - $40,000',
    testimonial: {
      text: 'VM Power Deck transformed our backyard into an oasis. The attention to detail and quality of work exceeded our expectations.'.replace(
        /"/g,
        '"'
      ),
      author: 'John D., Allentown, PA',
      avatar: '/images/placeholder.svg',
    },
  },
  {
    id: 2,
    title: 'Jersey Shore Beachfront Deck',
    location: 'Ocean City, NJ',
    category: 'Deck Construction',
    description:
      'A weather-resistant deck designed to withstand coastal conditions while providing stunning ocean views.',
    images: [
      '/images/hero-deck4.webp',
      '/images/deck61.webp',
      '/images/deck63.webp',
    ],
    features: [
      'PVC decking',
      'Stainless steel cable railing',
      'Built-in seating',
      'Outdoor kitchen area',
    ],
    completionDate: 'April 2023',
    budget: '$45,000 - $55,000',
    testimonial: {
      text: "Our new deck is the envy of the neighborhood. VM Power Deck's expertise in coastal construction is evident in every detail.",
      author: 'Sarah M., Ocean City, NJ',
      avatar: '/images/placeholder.svg',
    },
  },
  {
    id: 3,
    title: 'Pocono Mountain Retreat',
    location: 'East Stroudsburg, PA',
    category: 'Outdoor Living',
    description:
      'A comprehensive outdoor living space featuring a deck, patio, and fire pit area, perfect for year-round enjoyment in the Poconos.',
    images: [
      '/images/deck30.webp',
      '/images/deck31.webp',
      '/images/deck32.webp',
    ],
    features: [
      'Pressure-treated wood deck',
      'Stone patio',
      'Custom fire pit',
      'Landscape lighting',
    ],
    completionDate: 'August 2023',
    budget: '$35,000 - $45,000',
    testimonial: {
      text: 'VM Power Deck created the perfect outdoor space for our mountain home. We use it all year round, from summer barbecues to winter gatherings around the fire pit.',
      author: 'Mike R., East Stroudsburg, PA',
      avatar: '/images/placeholder.svg',
    },
  },
  {
    id: 4,
    title: 'Philadelphia Urban Oasis',
    location: 'Philadelphia, PA',
    category: 'Patio Design',
    description:
      'A modern, space-efficient patio design that maximizes outdoor living in a compact city environment.',
    images: ['/images/deck2.webp', '/images/deck3.webp', '/images/deck4.webp'],
    features: [
      'Porcelain tile patio',
      'Vertical garden',
      'Privacy screens',
      'Built-in bench seating',
    ],
    completionDate: 'May 2023',
    budget: '$20,000 - $30,000',
    testimonial: {
      text: "We didn't think we could have such a beautiful outdoor space in the city. VM Power Deck proved us wrong and gave us our own urban retreat.",
      author: 'Emily L., Philadelphia, PA',
      avatar: '/images/placeholder.svg',
    },
  },
  {
    id: 5,
    title: 'New Jersey Poolside Paradise',
    location: 'Princeton, NJ',
    category: 'Deck Construction',
    description:
      'An expansive pool deck with multiple entertainment zones, seamlessly blending with the existing landscape.',
    images: [
      '/images/deck70.webp',
      '/images/deck80.webp',
      '/images/deck90.webp',
    ],
    features: [
      'Composite pool decking',
      'Outdoor shower',
      'Pergola with retractable canopy',
      'Integrated pool equipment storage',
    ],
    completionDate: 'July 2023',
    budget: '$50,000 - $60,000',
    testimonial: {
      text: "Our pool area went from basic to breathtaking. VM Power Deck's design and execution were flawless.",
      author: 'David W., Princeton, NJ',
      avatar: '/images/placeholder.svg',
    },
  },
  {
    id: 6,
    title: 'Historic Bucks County Patio Restoration',
    location: 'Doylestown, PA',
    category: 'Restoration',
    description:
      "A careful restoration of a historic property's patio, blending modern functionality with classic charm.",
    images: [
      '/images/deck50.webp',
      '/images/deck51.webp',
      '/images/deck52.webp',
    ],
    features: [
      'Reclaimed brick paving',
      'Period-appropriate plantings',
      'Restored fountain',
      'Custom wrought iron furniture',
    ],
    completionDate: 'September 2023',
    budget: '$25,000 - $35,000',
    testimonial: {
      text: "VM Power Deck's attention to historical detail while incorporating modern comforts was impressive. They brought our patio back to life.",
      author: 'Linda H., Doylestown, PA',
      avatar: '/images/placeholder-user.webp',
    },
  },
]

const projectVideos = [
  {
    id: 1,
    title: 'Lehigh Valley Deck Transformation',
    description:
      'Watch the complete process of building a luxury multi-level deck in Allentown, PA.',
    videoId: 'AkAZ_bVgoqM', // This is a placeholder YouTube video ID
  },
  {
    id: 2,
    title: 'Jersey Shore Beachfront Deck Installation',
    description:
      'See how we construct weather-resistant decks for coastal properties in Ocean City, NJ.',
    videoId: 'i_agr-8L2yU', // This is a placeholder YouTube video ID
  },
  {
    id: 3,
    title: 'Pocono Mountain Outdoor Living Space',
    description:
      'Explore the creation of a year-round outdoor retreat in the beautiful Pocono Mountains.',
    videoId: 'YVZFEVZQoVA', // This is a placeholder YouTube video ID
  },
]

export default function ProjectsPage() {
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({})

  const handlePlayVideo = (videoId: string) => {
    setActiveVideos(prev => ({
      ...prev,
      [videoId]: true
    }))
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <JsonLd<ItemList>
        item={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: projects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'HomeAndConstructionBusiness',
              name: project.title,
              description: project.description,
              address: {
                '@type': 'PostalAddress',
                addressLocality: project.location,
              },
              image: project.images[0],
              priceRange: project.budget,
              review: {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                },
                author: {
                  '@type': 'Person',
                  name: project.testimonial.author.split(',')[0],
                },
                reviewBody: project.testimonial.text,
              },
            },
          })),
        }}
      />
      <Breadcrumb items={[{ label: 'Projects', href: '/projects' }]} />
      <h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
        Stunning Outdoor Projects in PA and NJ
      </h1>
      <p className='text-xl text-center mb-8 max-w-3xl mx-auto text-muted-foreground'>
        Explore our portfolio of beautiful, custom outdoor living spaces across
        Pennsylvania and New Jersey. From urban patios to expansive decks, see
        how we bring outdoor dreams to life.
      </p>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.id}>
            <Card className='flex flex-col h-full hover:shadow-lg transition-shadow duration-300'>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className='flex items-center'>
                  <MapPin className='h-4 w-4 mr-1' />
                  {project.location}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-grow'>
                <Carousel className='w-full'>
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={image || '/images/placeholder.svg'}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={400}
                          height={300}
                          className='w-full h-48 object-cover rounded-md'
                          loading='lazy'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          quality={80}
                          unoptimized={true}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <p className='mt-4 text-sm text-muted-foreground'>
                  {project.description}
                </p>
                <div className='mt-4'>
                  <h3 className='font-semibold mb-2'>Features:</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.features.map((feature, index) => (
                      <HoverCard key={index}>
                        <HoverCardTrigger>
                          <Badge variant='secondary' className='cursor-help'>
                            {feature}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <p className='text-sm'>
                            Learn more about our {feature.toLowerCase()} options
                            and benefits.
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
                <div className='mt-4 flex items-center'>
                  <Calendar className='h-4 w-4 mr-2' />
                  <span className='text-sm text-muted-foreground'>
                    Completed: {project.completionDate}
                  </span>
                </div>
                <div className='mt-2 flex items-center'>
                  <DollarSign className='h-4 w-4 mr-2' />
                  <span className='text-sm text-muted-foreground'>
                    Budget: {project.budget}
                  </span>
                </div>
              </CardContent>
              <CardFooter className='flex flex-col items-start'>
                <div className='mb-4 w-full'>
                  <h3 className='font-semibold mb-2 flex items-center'>
                    <Star className='h-4 w-4 mr-2 text-yellow-500' />
                    Client Testimonial
                  </h3>
                  <div className='flex items-start space-x-4'>
                    <Avatar>
                      <AvatarImage
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                      />
                      <AvatarFallback>
                        {project.testimonial.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm italic'>
                        &quot;{project.testimonial.text}&quot;
                      </p>
                      <p className='text-sm font-semibold mt-1'>
                        - {project.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='w-full'>
                      View Project Details
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-3xl'>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.location}</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className='max-h-[80vh]'>
                      <div className='space-y-4'>
                        <Carousel className='w-full'>
                          <CarouselContent>
                            {project.images.map((image, index) => (
                              <CarouselItem key={index}>
                                <Image
                                  src={image || '/images/placeholder.svg'}
                                  alt={`${project.title} - Detailed view ${
                                    index + 1
                                  }`}
                                  width={800}
                                  height={600}
                                  className='w-full object-cover rounded-md'
                                  loading='lazy'
                                  sizes='(max-width: 768px) 100vw, 800px'
                                  quality={85}
                                  unoptimized={true}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                        <div>
                          <h3 className='text-lg font-semibold'>Description</h3>
                          <p>{project.description}</p>
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold'>Features</h3>
                          <ul className='list-disc list-inside'>
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold'>
                            Project Details
                          </h3>
                          <p>Completion Date: {project.completionDate}</p>
                          <p>Budget: {project.budget}</p>
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold'>
                            Client Testimonial
                          </h3>
                          <blockquote className='border-l-4 border-gray-300 pl-4 italic'>
                            &quot;{project.testimonial.text}&quot;
                          </blockquote>
                          <p className='text-right'>
                            - {project.testimonial.author}
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Watch Our Projects in Action
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projectVideos.map((video) => (
              <Card key={video.id} className='overflow-hidden'>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <span className='text-blue-500 mr-2'>▶</span>
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='aspect-video mb-4 relative'>
                    {activeVideos[video.videoId] ? (
                      <iframe
                        width='100%'
                        height='100%'
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        className='iframe-border'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        loading='lazy'
                      ></iframe>
                    ) : (
                      <div 
                        className='relative w-full h-full cursor-pointer'
                        onClick={() => handlePlayVideo(video.videoId)}
                      >
                        <Image
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                          alt={`Thumbnail for ${video.title}`}
                          fill
                          className='object-cover'
                          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          loading='lazy'
                        />
                        <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                          <div className='rounded-full bg-red-600 p-4'>
                            <span className='text-white text-lg font-semibold'>Play</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p>{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='mt-16'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Why Choose VM Power Deck for Your PA or NJ Project?
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: MapPin,
              title: 'Local Expertise',
              description:
                "Deep knowledge of PA and NJ's diverse landscapes and climates.",
            },
            {
              icon: Tool,
              title: 'Quality Craftsmanship',
              description:
                'Exceptional workmanship on every project, built to last.',
            },
            {
              icon: ThumbsUp,
              title: 'Customer Satisfaction',
              description: 'A growing list of happy clients across PA and NJ.',
            },
          ].map((item, index) => (
            <div key={index}>
              <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <item.icon className='h-5 w-5 mr-2 text-blue-500' />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16 bg-primary text-primary-foreground rounded-lg p-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Start Your Outdoor Project in PA or NJ?
          </h2>
          <p className='text-xl mb-8'>
            Whether you&apos;re in the bustling cities of Philadelphia or
            Newark, the scenic Pocono Mountains, or anywhere in between,
            we&apos;re here to bring your outdoor vision to life. Contact us
            today for a free consultation and quote tailored to your local
            needs.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/contact' passHref>
              <Button size='lg' variant='secondary'>
                <Zap className='mr-2 h-5 w-5' />
                Get a Free Quote
              </Button>
            </Link>
            <Link href='/services' passHref>
              <Button size='lg' variant='secondary'>
                <Tool className='mr-2 h-5 w-5' />
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
