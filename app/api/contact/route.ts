import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message, projectType, preferredContact, recaptchaToken } = body

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: 'POST',
      }
    )

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    console.log('MAIL_TO:', process.env.MAIL_TO)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.MAIL_TO,
      subject: `WM Power Deck: ${name} New Submission form`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Project Type: ${projectType}
        Preferred Contact Method: ${preferredContact}
        Message: ${message}
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
