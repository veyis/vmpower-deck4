import Link from 'next/link'
import { Hammer } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      icon: 'h-6 w-6',
      container: 'p-1.5',
      text: 'text-lg',
      subtext: 'text-xs',
    },
    md: {
      icon: 'h-7 w-7',
      container: 'p-2',
      text: 'text-xl',
      subtext: 'text-xs',
    },
    lg: {
      icon: 'h-8 w-8',
      container: 'p-2.5',
      text: 'text-2xl',
      subtext: 'text-sm',
    },
  }

  return (
    <Link href='/' className={cn('flex items-center space-x-2', className)}>
      <div className='relative rounded-lg shadow-lg'>
        <div
          className={cn(
            'relative flex items-center justify-center transition-all duration-300 hover:scale-95 hover:rotate-3',
            sizes[size].container
          )}
        >
          <Hammer className={cn(sizes[size].icon, 'text-blue-900')} />
        </div>
      </div>
      {showText && (
        <div className='flex flex-col justify-center'>
          <span
            className={cn(
              'font-bold leading-tight tracking-tight',
              sizes[size].text,
              'text-blue-900'
            )}
          >
            VM Power Decks
          </span>
          <span
            className={cn(
              'leading-tight',
              sizes[size].subtext,
              'text-gray-700'
            )}
          >
            Premium Outdoor Solutions
          </span>
        </div>
      )}
    </Link>
  )
}
