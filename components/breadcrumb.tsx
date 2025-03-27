import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'default' | 'light'
}

export function Breadcrumb({ items, variant = 'default' }: BreadcrumbProps) {
  const textColorClass =
    variant === 'light' ? 'text-white/80' : 'text-gray-500'

  return (
    <nav
      aria-label='Breadcrumb'
      className={`text-sm ${textColorClass}`}
    >
      <ol className='flex items-center space-x-1'>
        <li>
          <Link
            href='/'
            className={`${
              variant === 'light' ? 'hover:text-white' : 'hover:text-gray-900'
            } transition-colors`}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className='flex items-center'>
            <ChevronRight className='h-4 w-4 mx-1' />
            {index === items.length - 1 ? (
              <span
                className={
                  variant === 'light' ? 'text-white' : 'text-gray-900 font-medium'
                }
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`${
                  variant === 'light'
                    ? 'hover:text-white'
                    : 'hover:text-gray-900'
                } transition-colors`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
