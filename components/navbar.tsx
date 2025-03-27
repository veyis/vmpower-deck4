'use client'

import Link from 'next/link'
import { Menu, ChevronDown, Phone, Search } from 'lucide-react'
import { Logo } from '@/components/logo'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const menuItems = [
  {
    name: 'Services',
    href: '/services',
    submenu: [
      {
        name: 'Deck Construction & Installation',
        description:
          'Transform your outdoor living space with our custom deck construction and installation services.',
        href: '/services/deck-construction',
      },
      {
        name: 'Deck Restoration & Repair',
        description:
          'Revitalize your aging deck with our expert restoration and repair services.',
        href: '/services/deck-restoration',
      },
      {
        name: 'Deck Features & Custom Enhancements',
        description:
          'Elevate your deck with our custom features and enhancements.',
        href: '/services/deck-features',
      },
      {
        name: 'Outdoor Living & Backyard Additions',
        description:
          'Create a luxurious outdoor retreat with our comprehensive outdoor living solutions.',
        href: '/services/outdoor-living',
      },
      {
        name: 'Fence Installation & Repair',
        description:
          "Enhance your property's security and curb appeal with our professional fence services.",
        href: '/services/fence-installation',
      },
      {
        name: 'Patio Design & Installation',
        description:
          'Transform your backyard into a stylish, inviting space with our custom patio services.',
        href: '/services/patio-installation',
      },
      {
        name: 'Deck Maintenance & Cleaning',
        description:
          'Keep your deck pristine and safe with our comprehensive maintenance and cleaning services.',
        href: '/services/deck-maintenance',
      },
    ],
  },
  {
    name: 'Materials',
    href: '/materials',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Company',
    href: '/about',
    submenu: [
      {
        name: 'About Us',
        description: 'Learn more about VM Power Deck and our mission.',
        href: '/about',
      },
      {
        name: 'Career',
        description: 'Join our team and grow with us.',
        href: '/career',
      },
      {
        name: 'Blog',
        description: 'Read our latest articles and insights.',
        href: '/blog',
      },
    ],
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

  const toggleDropdown = (name: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <Logo className='mr-6' size='md' showText />
        <div className='hidden md:flex flex-1 justify-center'>
          <NavigationMenu triggerMode="click">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger 
                        onClick={() => {
                          // Allow the component to handle the default behavior
                          // Just toggle the active item for visual feedback
                          setActiveItem(activeItem === item.name ? undefined : item.name);
                        }}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground min-h-[44px] flex flex-col justify-center'
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveItem(undefined);
                                  }}
                                >
                                  <div className='text-sm font-medium leading-none'>
                                    {subItem.name}
                                  </div>
                                  <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveItem(undefined);
                        }}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='hidden md:flex items-center space-x-4 ml-auto'>
          <Button variant='ghost' size='icon' asChild>
            <Link
              href='/search'
              aria-label='Search'
              className='flex items-center justify-center min-h-[44px] min-w-[44px]'
            >
              <Search className='h-5 w-5' />
            </Link>
          </Button>
          <Button asChild>
            <Link
              href='/contact'
              className='flex items-center justify-center min-h-[44px] px-4'
            >
              Get a Quote
            </Link>
          </Button>
          <Button variant='outline' size='icon' asChild>
            <Link
              href='tel:+14849427316'
              aria-label='Call Us'
              className='flex items-center justify-center min-h-[44px] min-w-[44px]'
            >
              <Phone className='h-4 w-4' />
            </Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden ml-auto'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <div className='mb-6'>
              <Logo size='lg' showText />
            </div>
            <nav className='flex flex-col space-y-4'>
              {menuItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="w-full">
                    <Button 
                      variant='ghost' 
                      className='w-full justify-start'
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown 
                        className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                          openDropdowns[item.name] ? 'rotate-180' : ''
                        }`} 
                      />
                    </Button>
                    {openDropdowns[item.name] && (
                      <div className='pl-4 mt-2 space-y-2 border-l-2 border-muted ml-2'>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className='flex items-center min-h-[44px] w-full p-2 hover:bg-accent hover:text-accent-foreground rounded-md'
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'w-full justify-start min-h-[44px] flex items-center'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button variant='ghost' className='w-full justify-start' asChild>
                <Link
                  href='/search'
                  onClick={() => setIsOpen(false)}
                  className='flex items-center min-h-[44px]'
                >
                  <Search className='mr-2 h-5 w-5' />
                  Search
                </Link>
              </Button>
            </nav>
            <div className='mt-6 space-y-2'>
              <Button className='w-full' asChild>
                <Link
                  href='/contact'
                  className='flex items-center justify-center min-h-[44px]'
                >
                  Contact Us
                </Link>
              </Button>
              <Button variant='outline' size='icon' className='w-full' asChild>
                <Link
                  href='tel:+14849427316'
                  aria-label='Call Us'
                  className='flex items-center justify-center min-h-[44px] min-w-[44px]'
                >
                  <Phone className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
