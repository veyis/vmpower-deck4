'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { ReCaptcha } from '@/components/recaptcha'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const [projectType, setProjectType] = useState('')
  const [preferredContact, setPreferredContact] = useState('email')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Form submission started')

    if (!recaptchaToken) {
      console.log('No reCAPTCHA token')
      toast({
        title: 'Error',
        description: 'Please complete the reCAPTCHA verification',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    try {
      console.log('Sending form data:', {
        name,
        email,
        phone,
        address,
        message,
        projectType,
        preferredContact,
        hasRecaptchaToken: !!recaptchaToken,
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
          projectType,
          preferredContact,
          recaptchaToken,
        }),
      })

      console.log('API response status:', response.status)
      const data = await response.json()
      console.log('API response data:', data)

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully!')
        toast({
          title: 'Message Sent',
          description: "We'll get back to you as soon as possible.",
          variant: 'default',
        })
        // Reset form fields
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setMessage('')
        setProjectType('')
        setPreferredContact('email')
        setRecaptchaToken(null)
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
        variant: 'destructive',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input
          id='name'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='your@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='phone'>Phone</Label>
        <Input
          id='phone'
          type='tel'
          placeholder='(123) 456-7890'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='address'>Address</Label>
        <Input
          id='address'
          placeholder='123 Main St, Anytown, USA'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='project-type'>Project Type</Label>
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger>
            <SelectValue placeholder='Select a project type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='deck-construction'>Deck Construction</SelectItem>
            <SelectItem value='deck-restoration'>Deck Restoration</SelectItem>
            <SelectItem value='custom-features'>Custom Features</SelectItem>
            <SelectItem value='outdoor-living'>
              Outdoor Living Spaces
            </SelectItem>
            <SelectItem value='other'>Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          placeholder='Tell us about your project...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className='space-y-2'>
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          value={preferredContact}
          onValueChange={setPreferredContact}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='email' id='contact-email' />
            <Label htmlFor='contact-email'>Email</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='phone' id='contact-phone' />
            <Label htmlFor='contact-phone'>Phone</Label>
          </div>
        </RadioGroup>
      </div>
      <div className='space-y-2'>
        <div className='flex items-center justify-center p-4 bg-muted/50 rounded-lg border border-muted'>
          <div className='text-center'>
            <p className='text-sm font-medium mb-2'>Security Check</p>
            <p className='text-xs text-muted-foreground mb-3'>Please verify you are human</p>
            <ReCaptcha onChange={setRecaptchaToken} />
          </div>
        </div>
      </div>
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-4">
          <p className="font-medium">{successMessage}</p>
        </div>
      )}
      <Button type='submit' className='w-full' disabled={isSubmitting}>
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className='mr-2 h-4 w-4' /> Send Message
          </>
        )}
      </Button>
    </form>
  )
}
