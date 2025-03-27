import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | VM Power Decks',
  description: 'Read VM Power Decks\' privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Breadcrumb
        items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
      />
      <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
        Privacy Policy
      </h1>
      <p className='text-xl text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
        At VM Power Deck, we are committed to protecting your privacy and
        ensuring the security of your personal information.
      </p>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Last updated: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            VM Power Deck (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            operates the website https://www.vmpowerdecks.com (the
            &quot;Site&quot;). This page informs you of our policies regarding
            the collection, use, and disclosure of personal information we
            receive from users of the Site.
          </p>
          <p className='mt-4'>
            We use your personal information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </CardContent>
      </Card>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='information-collection'>
          <AccordionTrigger>Information Collection and Use</AccordionTrigger>
          <AccordionContent>
            <p>
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to, your name, email address, postal address, and
              phone number (&quot;Personal Information&quot;).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='log-data'>
          <AccordionTrigger>Log Data</AccordionTrigger>
          <AccordionContent>
            <p>
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site (&quot;Log Data&quot;). This Log
              Data may include information such as your computer&apos;s Internet
              Protocol (&quot;IP&quot;) address, browser type, browser version,
              the pages of our Site that you visit, the time and date of your
              visit, the time spent on those pages and other statistics.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='cookies'>
          <AccordionTrigger>Cookies</AccordionTrigger>
          <AccordionContent>
            <p>
              Cookies are files with small amount of data, which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a web site and stored on your computer&apos;s hard drive.
            </p>
            <p className='mt-2'>
              Like many sites, we use &quot;cookies&quot; to collect
              information. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent. However, if you do not
              accept cookies, you may not be able to use some portions of our
              Site.
            </p>
            <p className='mt-2'>
              For more detailed information about cookies, including third-party
              cookies and Chrome&apos;s new approach to browsing without them,
              please visit our{' '}
              <Link
                href='/cookie-policy'
                className='text-blue-600 hover:underline'
              >
                Cookie Policy
              </Link>{' '}
              page.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='security'>
          <AccordionTrigger>Security</AccordionTrigger>
          <AccordionContent>
            <p>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='changes'>
          <AccordionTrigger>Changes to This Privacy Policy</AccordionTrigger>
          <AccordionContent>
            <p>
              This Privacy Policy is effective as of{' '}
              {new Date().toLocaleDateString()} and will remain in effect except
              with respect to any changes in its provisions in the future, which
              will be in effect immediately after being posted on this page.
            </p>
            <p className='mt-2'>
              We reserve the right to update or change our Privacy Policy at any
              time and you should check this Privacy Policy periodically. Your
              continued use of the Service after we post any modifications to
              the Privacy Policy on this page will constitute your
              acknowledgment of the modifications and your consent to abide and
              be bound by the modified Privacy Policy.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='contact'>
          <AccordionTrigger>Contact Us</AccordionTrigger>
          <AccordionContent>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className='mt-2'>
              VM Power Deck
              <br />
              123 Palmer Park Mall
S 680 Easton PA 18045 

              <br />
              Email: vmpowerdeckfence@gmail.com
              <br />
              Phone: (484) 743 7332
(484) 403 6218

            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
