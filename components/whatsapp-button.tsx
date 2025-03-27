'use client'

import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)
  const phoneNumber = '+14849427316'
  const message = "Hello, I'm interested in your services!"

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      className='fixed bottom-4 right-4 z-50 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg flex items-center justify-center'
      onClick={handleClick}
      aria-label='Chat on WhatsApp'
    >
      <Phone className='h-8 w-8 text-white' />
    </button>
  )
}
