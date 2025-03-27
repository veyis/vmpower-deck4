import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/logo'

const services = [
  { name: 'Deck Construction', href: '/services/deck-construction' },
  { name: 'Deck Restoration', href: '/services/deck-restoration' },
  // { name: 'Custom Enhancements', href: '/services/deck-features' },

  { name: 'Fence Installation', href: '/services/fence-installation' },
  { name: 'Patio Design', href: '/services/patio-installation' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
]

const resources = [
  { name: 'Project Gallery', href: '/projects' },
  { name: 'Materials Guide', href: '/materials' },
  { name: 'Outdoor Living', href: '/services/outdoor-living' },
  { name: 'Deck Maintenance', href: '/services/deck-maintenance' },
]

export function Footer() {
  return (
    <footer className='bg-muted'>
      <div className='container mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Logo size='lg' showText />
            <p className='text-sm text-muted-foreground'>
              Transforming outdoor spaces with quality craftsmanship since 2005.
              We bring your dream outdoor living areas to life.
            </p>
            <div className='flex space-x-4 justify-center sm:justify-start'>
              <Button variant='ghost' size='icon' aria-label='Facebook'>
                <Facebook className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                aria-label='Instagram'
                asChild
              >
                <a
                  href='https://www.instagram.com/vmpowerdeckfence/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className='h-5 w-5' />
                </a>
              </Button>
              <Button variant='ghost' size='icon' aria-label='Twitter'>
                <Twitter className='h-5 w-5' />
              </Button>
              <Button variant='ghost' size='icon' aria-label='YouTube' asChild>
                <a
                  href='https://www.youtube.com/@vmpowerconstruction7248'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Youtube className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Our Services</h3>
            <ul className='space-y-2'>
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Company</h3>
              <ul className='space-y-2'>
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-muted-foreground hover:text-primary transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Resources</h3>
              <ul className='space-y-2'>
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-muted-foreground hover:text-primary transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <MapPin className='h-5 w-5 mr-2 text-primary' />
                <span className='text-sm text-muted-foreground'>
                  123 Palmer Park Mall S 680 Easton PA 18045
                </span>
              </li>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 mr-2 text-primary' />
                <span className='text-sm text-muted-foreground'>
                  (484) 743 7332
(484) 403 6218

                </span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 mr-2 text-primary' />
                <span className='text-sm text-muted-foreground'>
                  vmpowerdeckfence@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Separator className='my-8' />
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            © 2024 VM Power Construction. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            <Link
              href='/privacy-policy'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/cookie-policy'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              Cookie Policy
            </Link>
            <Link
              href='/terms-of-service'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
