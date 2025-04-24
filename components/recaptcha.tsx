'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import Script from 'next/script'

interface ReCaptchaProps {
  onChange: (token: string | null) => void
}

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        execute: (siteKey: string, options: { action: string }) => Promise<string>
        ready: (callback: () => void) => void
      }
    }
  }
}

export function ReCaptcha({ onChange }: ReCaptchaProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const executeRecaptcha = async () => {
    try {
      if (typeof window.grecaptcha === 'undefined') {
        console.error('reCAPTCHA is not loaded')
        return null
      }

      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
        { action: 'SUBMIT' }
      )
      return token
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error)
      return null
    }
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        onLoad={() => setIsScriptLoaded(true)}
        strategy="afterInteractive"
      />
      <div className="recaptcha-container">
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault()
            if (!isScriptLoaded) {
              console.error('reCAPTCHA script not loaded')
              return
            }
            setIsLoading(true)
            try {
              const token = await executeRecaptcha()
              onChange(token)
            } finally {
              if (isMounted.current) {
                setIsLoading(false)
              }
            }
          }}
          className="g-recaptcha inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !isScriptLoaded}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            'Verify you are human'
          )}
        </button>
      </div>
    </>
  )
} 