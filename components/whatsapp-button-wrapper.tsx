'use client'

import dynamic from 'next/dynamic'

const WhatsAppButton = dynamic(() => import('./whatsapp-button').then(mod => mod.WhatsAppButton), {
  ssr: false,
  loading: () => null
})

export function WhatsAppButtonWrapper() {
  return <WhatsAppButton />
}
