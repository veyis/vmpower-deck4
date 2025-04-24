import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
const MAIL_TO = process.env.MAIL_TO
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

export async function POST(request: Request) {
  try {
    // Check required environment variables
    if (!RECAPTCHA_SECRET_KEY) {
      console.error('Missing RECAPTCHA_SECRET_KEY')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!MAIL_TO || !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing email configuration:', {
        hasMailTo: !!MAIL_TO,
        hasSmtpHost: !!SMTP_HOST,
        hasSmtpPort: !!SMTP_PORT,
        hasSmtpUser: !!SMTP_USER,
        hasSmtpPass: !!SMTP_PASS,
      })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, address, message, projectType, preferredContact, recaptchaToken } = body

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Missing reCAPTCHA token' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: 'POST',
      }
    )

    const recaptchaData = await recaptchaResponse.json()
    console.log('reCAPTCHA verification response:', recaptchaData)

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: `"VM Power Deck Website" <${SMTP_USER}>`,
      to: MAIL_TO,
      subject: `VM Power Deck: New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Project Type: ${projectType}
        Preferred Contact Method: ${preferredContact}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 3px; margin-top: 5px;">${message}</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the VM Power Deck contact form.
          </p>
        </div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully')
      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
