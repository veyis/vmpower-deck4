'use client'

import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Michael Johnson',
    location: 'Allentown, PA',
    image: '/images/placeholder-user.webp', // Now using WebP format for better performance
    quote:
      'VM Power Deck transformed our backyard into a stunning outdoor living space. The attention to detail and craftsmanship exceeded our expectations. Our new deck has become the favorite gathering spot for our family and friends!',
  },
  {
    name: 'Jennifer Williams',
    location: 'Princeton, NJ',
    image: '/images/placeholder-user.webp', // Now using WebP format for better performance
    quote:
      "We couldn't be happier with our new custom deck. The team at VM Power Deck was professional from start to finish. They listened to our ideas and delivered a beautiful, high-quality deck that perfectly fits our home and lifestyle.",
  },
  {
    name: 'Robert Thompson',
    location: 'Bethlehem, PA',
    image: '/images/placeholder-user.webp', // Now using WebP format for better performance
    quote:
      'After getting quotes from several contractors, we chose VM Power Deck for their expertise and value. They completed our deck renovation on time and within budget. The results are absolutely stunning!',
  },
  {
    name: 'Sarah Martinez',
    location: 'Easton, PA',
    image: '/images/placeholder-user.webp', // Now using WebP format for better performance
    quote:
      "The team at VM Power Deck designed and built a gorgeous multi-level deck for our sloped backyard. Their creative solution maximized our outdoor space and gave us the perfect entertaining area we've always wanted.",
  },
  {
    name: 'David Wilson',
    location: 'Trenton, NJ',
    image: '/images/placeholder-user.webp', // Now using WebP format for better performance
    quote:
      'From the initial consultation to the final walkthrough, VM Power Deck provided exceptional service. Their team was knowledgeable, courteous, and skilled. Our new deck is beautiful, sturdy, and exactly what we envisioned.',
  },
]

export function CustomerTestimonials() {
  return (
    <section className='section-padding bg-primary/5'>
      <div className='container mx-auto container-padding'>
        <h2 className='text-3xl font-bold text-center mb-4 text-blue-900'>
          What Our Customers Say
        </h2>
        <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
          Don&apos;t just take our word for it. Here&apos;s what our satisfied
          customers have to say about our deck construction and outdoor living
          services.
        </p>

        <Carousel className='w-full max-w-5xl mx-auto'>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className='bg-white border-primary/10 shadow-md'>
                  <CardContent className='flex flex-col items-center p-6 sm:p-8 text-center'>
                    <Avatar className='w-20 h-20 mb-4'>
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading='lazy'
                        width={80}
                        height={80}
                        decoding='async'
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>

                    {/* 5-Star Rating */}
                    <div className='flex mb-4'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-6 w-6 text-yellow-500 fill-yellow-500'
                        />
                      ))}
                    </div>

                    <p className='text-lg mb-6 italic'>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div>
                      <p className='font-semibold text-lg'>
                        {testimonial.name}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex justify-center mt-8'>
            <CarouselPrevious className='relative mr-2' />
            <CarouselNext className='relative ml-2' />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
