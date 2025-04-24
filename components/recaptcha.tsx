'use client'

import { useEffect, useRef } from 'react'

interface ReCaptchaProps {
  onChange: (token: string | null) => void
}

declare global {
  interface Window {
    grecaptcha: {
      render: (element: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => void
      reset: () => void
    }
  }
}

export function ReCaptcha({ onChange }: ReCaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      if (recaptchaRef.current) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
          callback: (token: string) => {
            onChange(token)
          },
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [onChange])

  return <div ref={recaptchaRef} className="flex justify-center my-4" />
} 