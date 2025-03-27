import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, phone, message, projectType, preferredContact } =
    await request.json()

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
      Project Type: ${projectType}
      Preferred Contact Method: ${preferredContact}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'An error occurred while submitting the form' },
      { status: 500 }
    )
  }
}
