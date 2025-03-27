'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Briefcase,
  Users,
  Leaf,
  Award,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

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
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const jobOpenings = [
  {
    title: 'Senior Deck Designer',
    department: 'Design',
    location: 'Allentown, PA',
    type: 'Full-time',
    description:
      "We're seeking an experienced deck designer to create innovative and functional outdoor living spaces for our clients.",
    responsibilities: [
      'Develop custom deck designs based on client needs and site conditions',
      'Collaborate with project managers and construction teams',
      'Create detailed CAD drawings and 3D renderings',
      'Stay up-to-date with industry trends and best practices',
    ],
    requirements: [
      '5+ years of experience in deck or landscape design',
      'Proficiency in CAD software and 3D modeling',
      'Strong communication and client relations skills',
      'Knowledge of building codes and regulations in PA and NJ',
    ],
  },
  {
    title: 'Experienced Carpenter',
    department: 'Construction',
    location: 'Princeton, NJ',
    type: 'Full-time',
    description:
      'Join our skilled team of carpenters to build beautiful, high-quality decks and outdoor structures.',
    responsibilities: [
      'Construct decks, pergolas, and other outdoor structures',
      'Read and interpret blueprints and construction plans',
      'Ensure all work meets quality standards and building codes',
      'Maintain a safe and clean work environment',
    ],
    requirements: [
      '3+ years of experience in carpentry, preferably in deck construction',
      'Strong knowledge of power tools and construction techniques',
      'Ability to work in various weather conditions',
      "Valid driver's license and reliable transportation",
    ],
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Bethlehem, PA',
    type: 'Full-time',
    description:
      "We're looking for a detail-oriented project manager to oversee our deck construction projects from start to finish.",
    responsibilities: [
      'Manage multiple deck construction projects simultaneously',
      'Coordinate with clients, designers, and construction teams',
      'Ensure projects are completed on time and within budget',
      'Handle project documentation and permitting processes',
    ],
    requirements: [
      '5+ years of experience in construction project management',
      'Strong organizational and leadership skills',
      'Proficiency in project management software',
      'Knowledge of local building codes and regulations',
    ],
  },
]

const benefits = [
  {
    icon: Briefcase,
    title: 'Competitive Salary',
    description: 'We offer industry-leading compensation packages.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work with a team of passionate professionals.',
  },
  {
    icon: Leaf,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and paid time off to recharge.',
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'Ongoing training and career growth opportunities.',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Deck Designer',
    image: '/images/placeholder-user.png',
    quote:
      "Joining VM Power Deck was the best career move I've made. The collaborative environment and opportunities for growth are unparalleled.",
  },
  {
    name: 'Mike Thompson',
    role: 'Project Manager',
    image: '/images/placeholder-user.png',
    quote:
      "I love the challenge of bringing our clients' visions to life. VM Power Deck provides all the tools and support needed to excel in my role.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Carpenter',
    image: '/images/placeholder-user.png',
    quote:
      "The emphasis on craftsmanship and quality at VM Power Deck aligns perfectly with my values as a carpenter. It's a great place to hone your skills.",
  },
]

export function CareerContent() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className='min-h-screen bg-background'>
      <section className='section-padding bg-gradient-to-b from-primary/10 to-background'>
        <div className='container mx-auto container-padding'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-8'
          >
            <h1 className='text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
              Join Our Team at VM Power Deck
            </h1>
            <p className='text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto'>
              Help us transform outdoor living spaces and build rewarding
              careers in Pennsylvania and New Jersey.
            </p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='text-2xl font-semibold mb-3'>Why Work With Us?</h2>
              <p className='mb-3'>
                At VM Power Deck, we&apos;re more than just a deck construction
                company. We&apos;re a team of passionate professionals dedicated
                to creating beautiful outdoor living spaces that bring joy to
                our clients. When you join our team, you become part of a family
                that values creativity, craftsmanship, and customer
                satisfaction.
              </p>
              <p className='mb-6'>
                We offer exciting opportunities for growth, a collaborative work
                environment, and the chance to make a real impact in
                people&apos;s lives by transforming their outdoor spaces.
              </p>
              <Button asChild>
                <Link href='#job-openings'>
                  View Open Positions
                  <ChevronRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='relative h-96 rounded-lg overflow-hidden shadow-xl'
            >
              <Image
                src='/images/employer1-md.webp'
                alt='VM Power Deck team working on a project'
                fill
                className='object-cover'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
                quality={85}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='section-padding bg-muted'>
        <div className='container mx-auto container-padding'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Benefits of Working at VM Power Deck
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='text-center hover:shadow-lg transition-shadow duration-300 h-full'>
                  <CardHeader>
                    <div className='mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                      <benefit.icon className='h-8 w-8 text-primary' />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='section-padding bg-gradient-to-b from-background to-primary/10'>
        <div className='container mx-auto container-padding'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            What Our Team Says
          </h2>
          <Carousel className='w-full max-w-4xl mx-auto'>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className='bg-primary/5 border-primary/10'>
                    <CardContent className='flex flex-col items-center p-4 sm:p-6 text-center'>
                      <Avatar className='w-24 h-24 mb-4'>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading='lazy'
                          width={96}
                          height={96}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <Star className='h-8 w-8 text-yellow-500 mb-4' />
                      <p className='text-lg mb-4 italic'>
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        {testimonial.role}
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

      <section id='job-openings' className='section-padding'>
        <div className='container mx-auto container-padding'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Current Job Openings
          </h2>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full mb-8'
          >
            <TabsList className='w-full justify-start flex-wrap h-auto'>
              <TabsTrigger value='all'>All Departments</TabsTrigger>
              <TabsTrigger value='design'>Design</TabsTrigger>
              <TabsTrigger value='construction'>Construction</TabsTrigger>
              <TabsTrigger value='operations'>Operations</TabsTrigger>
            </TabsList>
            {['all', 'design', 'construction', 'operations'].map(
              (department) => (
                <TabsContent key={department} value={department}>
                  <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {jobOpenings
                      .filter(
                        (job) =>
                          department === 'all' ||
                          job.department.toLowerCase() === department
                      )
                      .map((job, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className='flex flex-col h-full hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader className='p-4 sm:p-6'>
                              <div className='flex justify-between items-start mb-2'>
                                <Badge variant='secondary'>{job.type}</Badge>
                                <Badge>{job.department}</Badge>
                              </div>
                              <CardTitle className='text-2xl'>
                                {job.title}
                              </CardTitle>
                              <CardDescription>{job.location}</CardDescription>
                            </CardHeader>
                            <CardContent className='flex-grow p-4 sm:p-6 pt-0'>
                              <p className='mb-4 text-sm text-muted-foreground'>
                                {job.description}
                              </p>
                              <Accordion type='single' collapsible>
                                <AccordionItem value='responsibilities'>
                                  <AccordionTrigger>
                                    Responsibilities
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className='list-disc pl-5 space-y-1'>
                                      {job.responsibilities.map((resp, i) => (
                                        <li key={i} className='text-sm'>
                                          {resp}
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value='requirements'>
                                  <AccordionTrigger>
                                    Requirements
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className='list-disc pl-5 space-y-1'>
                                      {job.requirements.map((req, i) => (
                                        <li key={i} className='text-sm'>
                                          {req}
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </CardContent>
                            <div className='p-4 sm:p-6 pt-0'>
                              <Button asChild className='w-full'>
                                <Link href='/contact'>Apply Now</Link>
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>

      <section className='section-padding bg-muted'>
        <div className='container mx-auto container-padding'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Our Hiring Process
          </h2>
          <div className='max-w-3xl mx-auto'>
            <ol className='relative border-l border-gray-200 dark:border-gray-700'>
              {[
                {
                  title: 'Application Review',
                  description:
                    'We carefully review all applications to find candidates whose skills and experience align with our needs.',
                },
                {
                  title: 'Initial Phone Interview',
                  description:
                    'A brief call to discuss your background, interest in the role, and answer any initial questions you may have.',
                },
                {
                  title: 'In-Person Interview',
                  description:
                    'Meet with our team to dive deeper into your experience and see how you might fit with our company culture.',
                },
                {
                  title: 'Offer and Onboarding',
                  description:
                    "If it's a great fit, we'll extend an offer and welcome you to the VM Power Deck family!",
                },
              ].map((step, index) => (
                <motion.li
                  key={index}
                  className='mb-8 ml-6'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className='absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                    <CheckCircle2 className='w-5 h-5 text-white' />
                  </span>
                  <h3 className='flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
                    {step.title}
                  </h3>
                  <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className='section-padding bg-primary text-primary-foreground'>
        <div className='container mx-auto container-padding text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Build Your Career with VM Power Deck?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Join our team of passionate professionals and help us create
            beautiful outdoor living spaces across Pennsylvania and New Jersey.
          </p>
          <Button asChild size='lg' variant='secondary' className='group'>
            <Link href='#job-openings'>
              View Open Positions
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
