import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import type { LocalBusiness, FAQPage } from 'schema-dts'
import { Metadata } from 'next'
import Script from 'next/script'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Breadcrumb } from '@/components/breadcrumb'
import { ContactForm } from '@/components/contact-form'
import MapWrapper from '@/components/map-wrapper'

export const metadata: Metadata = {
  title: 'Contact VM Power Decks - Get in Touch for Your Deck Project',
  description: "Contact VM Power Decks for a free consultation on your deck building or outdoor living space project. We're here to answer your questions and provide expert advice.",
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <div className='container mx-auto px-4 py-12'>
        <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
        <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
          Contact VM Power Deck
        </h1>
        <p className='text-xl text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
          Ready to transform your outdoor space? Get in touch with our team of
          experts today.
        </p>

        <div className='grid md:grid-cols-2 gap-12'>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly or visit our office.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center'>
                  <MapPin className='h-5 w-5 mr-2 text-primary' />
                  <span className='text-sm'>123 Palmer Park Mall S 680<br />Easton, PA 18045</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='h-5 w-5 mr-2 text-primary' />
                  <span className='text-sm'>(484) 743-7332<br />(484) 403-6218</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-5 w-5 mr-2 text-primary' />
                  <span className='text-sm'>vmpowerdeckfence@gmail.com</span>
                </div>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 mr-2 text-primary' />
                  <span className='text-sm'>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <MapWrapper latitude={40.6789} longitude={-75.2205} />
              </CardContent>
            </Card>
          </div>
        </div>
        <JsonLd<LocalBusiness>
          item={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'VM Power Deck',
            description:
              'Expert outdoor living services including deck construction, restoration, maintenance, and patio design in Pennsylvania and New Jersey.',
            url: 'https://www.vmpowerdecks.com',
            telephone: '(484) 743-7332',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-484-942-7316',
              contactType: 'Customer Service',
              areaServed: 'US',
              availableLanguage: ['English', 'Spanish'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Palmer Park Mall S 680',
              addressLocality: 'Easton',
              addressRegion: 'PA',
              postalCode: '18045',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 40.6789,
              longitude: -75.2205,
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
              'https://www.youtube.com/channel/UCVMPowerDeck',
            ],
          }}
        />
        <JsonLd<FAQPage>
          item={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What areas do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We primarily serve Pennsylvania and New Jersey, with offices in Allentown, PA and central New Jersey.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer warranties on your work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are you licensed and insured?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
                },
              },
            ],
          }}
        />
      </div>
    </>
  )
}
