import Image from 'next/image'
import Link from 'next/link'
import {
  Hammer,
  Users,
  Award,
  Leaf,
  ThumbsUp,
  MapPin,
  Quote,
  ChevronRight,
} from 'lucide-react'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb } from '@/components/breadcrumb'
// import { TeamMembers } from '@/components/team-members'

export const metadata: Metadata = {
  title: 'About VM Power Decks - Our Story and Expertise',
  description: 'Learn about VM Power Decks, our experienced team, our commitment to quality craftsmanship, and our passion for creating beautiful outdoor living spaces.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/about',
  },
  openGraph: {
    title: 'About VM Power Deck | Our Story, Values, and Team',
    description:
      "Discover VM Power Deck's journey, our commitment to quality outdoor living spaces, and the dedicated team behind our success in Pennsylvania and New Jersey.",
    images: [
      {
        url: '/images/about-us-og.webp',
        width: 1200,
        height: 630,
        alt: 'VM Power Deck Team',
      },
    ],
  },
}

const milestones = [
  { year: 2005, event: 'VM Power Deck founded in Allentown, PA' },
  {
    year: 2010,
    event: 'Expanded services to include custom deck features and enhancements',
  },
  {
    year: 2015,
    event: 'Opened second office in New Jersey to serve a wider customer base',
  },
  {
    year: 2018,
    event: 'Launched eco-friendly decking options and sustainable practices',
  },
  {
    year: 2020,
    event: 'Introduced virtual design consultations for customer convenience',
  },
  { year: 2023, event: 'Celebrated completion of our 1000th project' },
]

const values = [
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description:
      'We take pride in our work, ensuring every detail meets our high standards of quality.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description:
      "Our clients' vision and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, big or small.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      "We're committed to eco-friendly practices and materials in our work.",
  },
]

const testimonials = [
  {
    name: 'John D.',
    location: 'Allentown, PA',
    image: '/images/placeholder.svg',
    quote:
      'VM Power Deck transformed our backyard into an oasis. Their attention to detail and craftsmanship is unmatched.',
  },
  {
    name: 'Sarah M.',
    location: 'Princeton, NJ',
    image: '/images/placeholder.svg',
    quote:
      'From design to completion, the team was professional, creative, and a joy to work with. Our new deck is the envy of the neighborhood!',
  },
  {
    name: 'Michael R.',
    location: 'Bethlehem, PA',
    image: '/images/placeholder.svg',
    quote:
      'The quality of work and materials used by VM Power Deck is exceptional. Our deck still looks brand new after years of use.',
  },
]

const faqs = [
  {
    question: 'How long has VM Power Deck been in business?',
    answer:
      'VM Power Deck was founded in 2005, giving us over 15 years of experience in the outdoor living industry.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve Pennsylvania and New Jersey, with offices in Allentown, PA and central New Jersey.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer:
      'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
  },
  {
    question: 'What sets VM Power Deck apart from other deck builders?',
    answer:
      "Our combination of extensive experience, commitment to quality, custom designs, and exceptional customer service sets us apart. We're not just building decks; we're creating outdoor living experiences.",
  },
]

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-4 bg-gradient-to-b from-primary/10 to-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <Breadcrumb items={[{ label: 'About', href: '/about' }]} />
          <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
            About VM Power Deck
          </h1>
          <p className='text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto'>
            Transforming outdoor spaces with quality craftsmanship and
            innovative designs since 2005.
          </p>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Our Story</h2>
              <p className='mb-4'>
                VM Power Deck was founded in 2005 with a simple mission: to
                create beautiful, functional outdoor living spaces that bring
                joy to homeowners across Pennsylvania and New Jersey. What
                started as a small team of passionate craftsmen has grown into a
                leading outdoor construction company, known for our attention to
                detail, innovative designs, and commitment to customer
                satisfaction.
              </p>
              <p>
                Over the years, we&apos;ve expanded our services to meet the
                evolving needs of our clients, from custom deck construction to
                comprehensive outdoor living solutions. Our journey has been
                marked by continuous learning, adaptation to new technologies,
                and a steadfast commitment to quality.
              </p>
              <Button className='mt-6' asChild>
                <Link href='/projects'>
                  View Our Projects
                  <ChevronRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
            <div className='relative h-96 rounded-lg overflow-hidden shadow-xl'>
              <Image
                src='/images/deck40.webp'
                alt='VM Power Deck team at work'
                fill
                className='object-cover'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
                quality={85}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 bg-muted'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Our Values</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow duration-300'
              >
                <CardHeader>
                  <div className='mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                    <value.icon className='h-8 w-8 text-primary' />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Our Journey</h2>
          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20'></div>
            <div className='space-y-12'>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className='flex-1 md:w-1/2'></div>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-primary border-4 border-background z-10'></div>
                  <div className='flex-1 md:w-1/2 p-4'>
                    <Card>
                      <CardHeader>
                        <CardTitle>{milestone.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <TeamMembers /> */}

      <section className='py-4 bg-muted'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Why Choose VM Power Deck?
          </h2>
          <Tabs defaultValue='experience' className='w-full'>
            <TabsList className='grid w-full grid-cols-1 md:grid-cols-4'>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='quality'>Quality</TabsTrigger>
              <TabsTrigger value='customization'>Customization</TabsTrigger>
              <TabsTrigger value='service'>Service</TabsTrigger>
            </TabsList>
            <TabsContent value='experience'>
              <Card>
                <CardHeader>
                  <CardTitle>Years of Expertise</CardTitle>
                  <CardDescription>
                    Benefit from our extensive industry knowledge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    With over 15 years in the business, we&apos;ve honed our
                    skills and processes to deliver exceptional results
                    consistently. Our experienced team has worked on a wide
                    range of projects, giving us the insight to handle any
                    challenge that may arise during your deck construction or
                    outdoor living project.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='quality'>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Materials and Craftsmanship</CardTitle>
                  <CardDescription>
                    We never compromise on quality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    At VM Power Deck, we use only the highest quality materials
                    sourced from reputable suppliers. Our skilled craftsmen pay
                    attention to every detail, ensuring that your deck or
                    outdoor space is built to last and withstand the test of
                    time and weather.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='customization'>
              <Card>
                <CardHeader>
                  <CardTitle>Tailored to Your Needs</CardTitle>
                  <CardDescription>Your vision, our expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    We understand that every homeowner has unique preferences
                    and requirements. That&apos;s why we offer fully
                    customizable solutions, working closely with you to design
                    and build an outdoor space that perfectly fits your
                    lifestyle, property, and budget.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='service'>
              <Card>
                <CardHeader>
                  <CardTitle>Exceptional Customer Service</CardTitle>
                  <CardDescription>
                    We&apos;re with you every step of the way
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    From the initial consultation to the final walkthrough, our
                    team is committed to providing outstanding customer service.
                    We keep you informed throughout the process, address any
                    concerns promptly, and ensure your complete satisfaction
                    with the final result.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className='py-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            What Our Clients Say
          </h2>
          <Carousel className='w-full max-w-4xl mx-auto'>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className='bg-primary/5 border-primary/10'>
                    <CardContent className='flex flex-col items-center p-6 text-center'>
                      <Quote className='h-8 w-8 text-primary mb-4' />
                      <p className='text-lg mb-4 italic'>
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <Avatar className='w-16 h-16 mb-2'>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        {testimonial.location}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className='py-4 bg-muted'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <Accordion
            type='single'
            collapsible
            className='w-full max-w-3xl mx-auto'
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className='py-4 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Let&apos;s bring your outdoor vision to life. Contact us today for a
            free consultation and quote.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/contact'>
                <ThumbsUp className='mr-2 h-5 w-5' />
                Get a Free Quote
              </Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/projects'>
                <MapPin className='mr-2 h-5 w-5' />
                View Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
