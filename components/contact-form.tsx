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

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [projectType, setProjectType] = useState('')
  const [preferredContact, setPreferredContact] = useState('email')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          projectType,
          preferredContact,
        }),
      })

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully!')
        toast({
          title: 'Message Sent',
          description: "We'll get back to you as soon as possible.",
        })
        // Reset form fields
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setProjectType('')
        setPreferredContact('email')
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
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
      {successMessage && <p>{successMessage}</p>}
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
