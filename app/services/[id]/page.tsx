import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { services, sharedLocations } from '@/data/services'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/breadcrumb'
import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import { JsonLd } from 'react-schemaorg'
import type { Service, WithContext } from 'schema-dts'

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const paramsAwait = await params
  const service = services.find((s) => s.id === paramsAwait?.id)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.name} | VM Power Deck`,
    description: `Expert ${service.name.toLowerCase()} services in PA and NJ. ${service.description.replace(
      "'",
      '\u0027'
    )}' Contact VM Power Deck for a free quote today!`,
    alternates: {
      canonical: `https://www.vmpowerdecks.com/services/${service.id}`,
    },
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function ServicePage({ params }: any) {
  const paramsAwait = await params
  const service = services.find((s) => s.id === paramsAwait?.id)

  if (!service) {
    notFound()
  }

  // Check if all locations are the same as sharedLocations
  const usesSharedLocations = service.locations.length === sharedLocations.length &&
    service.locations.every(location => sharedLocations.includes(location))

  const jsonLdData: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'VM Power Deck',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1280 Woodmont lane',
        addressLocality: 'Catasauqua',
        addressRegion: 'PA',
        postalCode: '18032',
        addressCountry: 'US',
      },
      telephone: '(484) 743-7332',
    },
    areaServed: service.locations.map((location) => ({
      '@type': 'State',
      name: location,
    })),
    serviceType: service.name,
    url: `https://www.vmpowerdecks.com/services/${service.id}`,
  }

  // Find related services (excluding current service)
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3)

  return (
    <div className="w-full bg-white">
      <JsonLd<Service> item={jsonLdData} />
      
      {/* Hero Section - Minimalist with subtle gradient */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src={service.image || '/images/placeholder.svg'}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {service.description}
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name, href: `/services/${service.id}` },
            ]}
            variant="light"
          />
        </div>
      </div>
      


      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700">{service.longDescription}</p>
              </div>
            </section>
            
            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Locations Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Locations</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  {usesSharedLocations 
                    ? `We offer our ${service.name.toLowerCase()} services in all of our service areas across Pennsylvania and New Jersey:` 
                    : `We proudly offer our ${service.name.toLowerCase()} services in the following locations:`}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {service.locations.map((location) => (
                    <div key={location} className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-600 mr-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              {/* Quick Contact */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Request a Free Quote
                </h3>
                <p className="text-gray-700 mb-4">
                  Interested in our {service.name.toLowerCase()} services? Contact us today for a free, no-obligation quote.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              
              {/* Quick Location View */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Service Coverage
                </h3>
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">
                    {usesSharedLocations 
                      ? 'Available in all service areas' 
                      : `${service.locations.length} locations served`}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.locations.slice(0, 6).map((location) => (
                    <Badge key={location} variant="outline" className="text-xs">
                      {location}
                    </Badge>
                  ))}
                </div>
                {service.locations.length > 6 && (
                  <p className="text-sm text-gray-600">
                    +{service.locations.length - 6} more locations
                  </p>
                )}
                <div className="mt-4">
                  <Link href="/services" className="text-sm text-blue-600 hover:underline flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    View all service locations
                  </Link>
                </div>
              </div>
              
              {/* Related Services */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Services
                </h3>
                <div className="space-y-4">
                  {relatedServices.map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.id}`}
                      className="block p-4 bg-white rounded border border-gray-200 hover:border-primary transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">
                        {relatedService.name}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedService.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact us today for a free consultation and quote on our {service.name.toLowerCase()} services.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
