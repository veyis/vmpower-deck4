import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
// Import only the icons that are actually used frequently
import { ArrowRight, Star } from 'lucide-react'

import { JsonLd } from 'react-schemaorg'
import type {
  LocalBusiness,
  WebSite,
  Organization,
  BreadcrumbList,
} from 'schema-dts'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CustomerTestimonials } from '@/components/customer-testimonials'
import { YouTubeCarousel } from '@/components/youtube-carousel'
import { getBlogPosts } from '@/lib/api'
import { HeroCarousel } from '@/components/hero-carousel'

// Import service icons from client component
import { 
  Hammer, 
  Wrench, 
  TreePine, 
  PaintBucket, 
  Fence, 
  Shovel, 
  Spray, 
  CalendarIcon, 
  ClockIcon 
} from '@/components/service-icons'

const services = [
  {
    name: 'Deck Construction & Installation',
    description:
      'Custom deck design and professional installation using premium materials.',
    icon: Hammer,
    href: '/services/deck-construction',
  },
  {
    name: 'Deck Restoration & Repair',
    description:
      'Revitalize your aging deck with our expert restoration and repair services.',
    href: '/services/deck-restoration',
    id: 'deck-restoration',
    icon: Wrench,
  },
  {
    name: 'Deck Features & Custom Enhancements',
    description: 'Elevate your deck with our custom features and enhancements.',
    href: '/services/deck-features',
    id: 'deck-features',
    icon: TreePine,
  },
  {
    name: 'Outdoor Living & Backyard Additions',
    description:
      'Create a luxurious outdoor retreat with our comprehensive outdoor living solutions.',
    href: '/services/outdoor-living',
    id: 'outdoor-living',
    icon: PaintBucket,
  },
  {
    name: 'Fence Installation & Repair',
    description:
      "Enhance your property's security and curb appeal with our professional fence services.",
    href: '/services/fence-installation',
    id: 'fence-installation',
    icon: Fence,
  },
  {
    name: 'Patio Design & Installation',
    description:
      'Transform your backyard into a stylish, inviting space with our custom patio services.',
    href: '/services/patio-installation',
    id: 'patio-installation',
    icon: Shovel,
  },
  {
    name: 'Deck Maintenance & Cleaning',
    description:
      'Keep your deck pristine and safe with our comprehensive maintenance and cleaning services.',
    href: '/services/deck-maintenance',
    id: 'deck-maintenance',
    icon: Spray,
  },
]

const youtubeVideos = [
  {
    id: 'video1',
    title: 'VM Power Deck Construction',
    description:
      'Looking to upgrade your outdoor space with a stunning, high-quality deck? At VM Power Deck Construction & Remodeling, we specialize in building and renovating decks that enhance the beauty, functionality, and value of your home.',
    videoId: 'i_agr-8L2yU',
  },
  {
    id: 'video2',
    title: 'Expert Craftsmanship & Design!',
    description:
      'Looking to upgrade your outdoor space with a stunning, high-quality deck? At VM Power Deck Construction & Remodeling, we specialize in building and renovating decks that enhance the beauty, functionality, and value of your home.',
    videoId: 'KO2xE2ZezRA',
  },
  {
    id: 'video3',
    title: 'VM Power Deck Building Services',
    description:
      'We showcase our expert deck construction services in Pennsylvania (PA) and New Jersey (NJ). Watch as our skilled team transforms outdoor spaces with high-quality materials, precise craftsmanship, and attention to detail.',
    videoId: 'AkAZ_bVgoqM',
  },
]

export const metadata: Metadata = {
  title: 'VM Power Decks - Professional Deck Building Services',
  description: 'VM Power Decks offers premium deck building, outdoor living spaces, and renovation services with expert craftsmanship and quality materials.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/',
  },
}

export default async function Home() {
  const blogPosts = await getBlogPosts()

  return (
    <div>
      {/* Full-width Hero Carousel Section */}
      <HeroCarousel />

      {/* Hidden H1 for SEO */}
      <h1 className='sr-only'>
        VM Power Deck - Premium Outdoor Solutions in Pennsylvania and New Jersey
      </h1>

      {/* YouTube Videos Section */}
      <section className='section-padding bg-muted'>
        <div className='container mx-auto container-padding'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-blue-900'>
            Our Work in Action
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto'>
            Watch our team transform outdoor spaces and hear from satisfied
            clients.
          </p>
          <YouTubeCarousel videos={youtubeVideos} />
        </div>
      </section>

      {/* Featured Service */}
      <section className='section-padding bg-primary/5'>
        <div className='container mx-auto container-padding'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h2 className='text-3xl font-bold mb-4 text-blue-900'>
                Featured Service: Custom Deck Design
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Transform your outdoor space with our expert custom deck design
                service. We bring your vision to life, creating the perfect
                blend of functionality and aesthetics.
              </p>
              <ul className='space-y-2 mb-6'>
                <li className='flex items-center'>
                  <Star className='h-5 w-5 text-yellow-500 mr-2' />
                  Tailored to your specific needs and preferences
                </li>
                <li className='flex items-center'>
                  <Star className='h-5 w-5 text-yellow-500 mr-2' />
                  High-quality materials for durability and longevity
                </li>
                <li className='flex items-center'>
                  <Star className='h-5 w-5 text-yellow-500 mr-2' />
                  Expert craftsmanship and attention to detail
                </li>
              </ul>
              <Button asChild>
                <Link href='/services/deck-construction'>
                  Learn More About Custom Deck Design
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
            <div className='md:w-1/2'>
              <picture>
                {/* AVIF version for modern browsers */}
                <source
                  type="image/avif"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 600px"
                  srcSet="/images/hero-deck41-400.avif 400w, /images/hero-deck41-600.avif 600w"
                />
                {/* WebP fallback */}
                <source
                  type="image/webp"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 600px"
                  srcSet="/images/hero-deck41-400.webp 400w, /images/hero-deck41-600.webp 600w"
                />
                <Image
                  src='/images/hero-deck41-600.webp'
                  alt='Custom deck design by VM Power Deck featuring a multi-level structure with built-in seating and ambient lighting'
                  width={600}
                  height={400}
                  className='rounded-lg shadow-lg'
                  priority
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 50vw, 600px'
                  quality={85}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className='section-padding bg-background relative overflow-hidden'>
        <div className='container mx-auto container-padding relative z-10'>
          <h2 className='text-3xl font-bold text-center mb-4 text-primary'>
            Our Services
          </h2>
          <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Discover our range of premium outdoor solutions designed to elevate
            your living space.
          </p>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <Card
                key={service.name}
                className='group hover:shadow-lg transition-shadow duration-300'
              >
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='bg-primary/10 p-3 rounded-full'>
                      <service.icon className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='text-xl font-semibold'>{service.name}</h3>
                  </div>
                  <p className='text-muted-foreground mb-4'>
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className='w-full group'>
                    <Link href={`/services/${service.id}`}>
                      Learn More About {service.name}
                      <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className='absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
        <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
      </section>

      {/* Featured Projects */}
      {/* <FeaturedProjects /> */}

      {/* Team Members */}
      {/* <TeamMembers /> */}

      {/* Latest Blog Posts */}
      <section className='section-padding bg-muted relative overflow-hidden'>
        <div className='container mx-auto container-padding relative z-10'>
          <h2 className='text-3xl font-bold text-center mb-4 text-blue-900'>
            Latest from Our Blog
          </h2>
          <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Stay up-to-date with the latest trends, tips, and insights in
            outdoor living and deck construction.
          </p>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className='flex flex-col'>
                <CardHeader className='p-0'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className='w-full h-48 object-cover rounded-t-lg'
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    quality={80}
                    // Add blur placeholder for better UX during loading
                    placeholder='blur'
                    blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM3Nzc3NzciLz48L3N2Zz4='
                    // Add decoding async for better performance
                    decoding='async'
                  />
                </CardHeader>
                <CardContent className='flex-grow p-6'>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-2'>
                    <span className='flex items-center'>
                      <CalendarIcon className='w-4 h-4 mr-1' />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className='flex items-center'>
                      <ClockIcon className='w-4 h-4 mr-1' />
                      {post.readTime} min read
                    </span>
                  </div>
                  <CardTitle className='text-2xl mb-2'>{post.title}</CardTitle>
                  <p className='text-muted-foreground mb-4'>{post.excerpt}</p>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button asChild>
                    <Link href='/blog'>View All Posts</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button asChild size='lg' variant='outline'>
              <Link href='/blog'>View All Posts</Link>
            </Button>
          </div>
        </div>
        <div className='absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
      </section>

      {/* Customer Testimonials */}
      <CustomerTestimonials />

      {/* Call to Action */}
      <section className='section-padding bg-gradient-to-r from-gray-500 to-primary-foreground text-primary-foreground relative overflow-hidden'>
        <div className='container mx-auto container-padding text-center relative z-10'>
          <h2 className='text-3xl font-bold mb-6 text-blue-900'>
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Contact us today for a free consultation and quote. Let\s bring your
            vision to life!
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button size='lg' variant='secondary' asChild>
              <Link href='/contact'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </Button>
            <Button size='lg' variant='secondary' asChild>
              <Link href='/services'>Explore Our Services</Link>
            </Button>
            <Button size='lg' variant='secondary' asChild>
              <Link href='/projects'>View Our Projects</Link>
            </Button>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
      </section>
      {/* Structured Data */}
      <JsonLd<LocalBusiness>
        item={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'VM Power Deck',
          description:
            'Expert outdoor living services including deck construction, restoration, and maintenance in Pennsylvania and New Jersey.',
          url: 'https://www.vmpowerdecks.com',
          telephone: '(484) 743-7332',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1280 Woodmont lane',
            addressLocality: 'Catasauqua',
            addressRegion: 'PA',
            postalCode: '18032',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.6584, // Replace with actual coordinates
            longitude: -75.4702, // Replace with actual coordinates
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '08:00',
              closes: '18:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '09:00',
              closes: '15:00',
            },
          ],
          sameAs: [
            'https://www.facebook.com/VMPowerDeck',
            'https://www.instagram.com/VMPowerDeck',
            'https://twitter.com/VMPowerDeck',
            'https://www.youtube.com/@vmpowerconstruction7248',
          ],
        }}
      />

      <JsonLd<WebSite>
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'VM Power Deck',
          url: 'https://www.vmpowerdecks.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://www.vmpowerdecks.com/search?q={search_term_string}',
            },
          },
        }}
      />

      <JsonLd<Organization>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'VM Power Deck',
          url: 'https://www.vmpowerdecks.com',
          logo: 'https://www.vmpowerdecks.com/logo.png',
          sameAs: [
            'https://www.facebook.com/VMPowerDeck',
            'https://www.instagram.com/VMPowerDeck',
            'https://twitter.com/VMPowerDeck',
            'https://www.youtube.com/@vmpowerconstruction7248',
          ],
        }}
      />

      <JsonLd<BreadcrumbList>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.vmpowerdecks.com',
            },
          ],
        }}
      />
      <section className='section-padding bg-primary text-primary-foreground'>
        <div className='container mx-auto container-padding text-center'>
          <h2 className='text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            Transform Your Outdoor Living Space
          </h2>
        </div>
      </section>
    </div>
  )
}
