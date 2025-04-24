'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

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
        '6Ld_lCMrAAAAACniFxMUhgxB5fEsXzXRhDdka1N_',
        { action: 'SUBMIT' }
      )
      return token
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error)
      return null
    }
  }

  return (
    <div className="recaptcha-container">
      <button
        type="button"
        onClick={async (e) => {
          e.preventDefault()
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
        disabled={isLoading}
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
  )
} 