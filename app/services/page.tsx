import Link from 'next/link'
import Image from 'next/image'
import { services, sharedLocations } from '@/data/services'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/breadcrumb'
import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | VM Power Deck',
  description: 'Explore our comprehensive deck construction, maintenance, and restoration services across Pennsylvania and New Jersey.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/services',
  },
}

export default function ServicesPage() {
  // Calculate total unique locations across all services
  const allLocations = new Set<string>(sharedLocations)
  
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
            ]}
            variant="light"
          />
        </div>
      </div>
      
      {/* Location Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container flex items-center justify-center">
          <MapPin className="mr-2 h-5 w-5" />
          <p className="text-sm md:text-base font-medium">
            Serving {allLocations.size} locations across Pennsylvania and New Jersey
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Deck Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From custom deck construction to restoration and maintenance, we provide comprehensive services 
              to enhance your outdoor living space across Pennsylvania and New Jersey.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image || '/images/placeholder.svg'}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {service.locations.length} locations served
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {service.locations.slice(0, 3).map((location) => (
                      <Badge key={location} variant="outline" className="text-xs">
                        {location}
                      </Badge>
                    ))}
                    {service.locations.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.locations.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/services/${service.id}`}>
                    View Service Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Locations Section */}
      <div className="container py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Service Locations</h2>
          <p className="text-center text-gray-700 mb-8">
            We proudly serve the following locations across Pennsylvania and New Jersey:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {sharedLocations.map((location) => (
              <div key={location} className="flex items-center p-2 bg-white rounded-md border border-gray-200">
                <MapPin className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-sm">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-lg mb-8">
              Contact us today for a free consultation and quote on any of our professional deck services.
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