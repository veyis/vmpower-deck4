import type { Metadata } from 'next'
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
  title: 'Terms of Service | VM Power Decks',
  description: 'Review VM Power Decks\' terms of service to understand the conditions governing the use of our website and services.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Breadcrumb
        items={[{ label: 'Terms of Service', href: '/terms-of-service' }]}
      />
      <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
        Terms of Service
      </h1>
      <p className='text-xl text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
        Please read these terms carefully before using our services or website.
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
            These Terms of Service (&#34;Terms&#34;, &#34;Terms of Service&#34;)
            govern your use of our website located at
            https://www.vmpowerdecks.com (together or individually
            &#34;Service&#34;) operated by VM Power Deck (&#34;us&#34;,
            &#34;we&#34;, or &#34;our&#34;).
          </p>
          <p className='mt-4'>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </p>
          <p className='mt-4'>
            Your agreement with us includes these Terms and our Privacy Policy
            (&#34;Agreements&#34;). You acknowledge that you have read and
            understood Agreements, and agree to be bound by them.
          </p>
          <p className='mt-4'>
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing at
            vmpowerdeckfence@gmail.com so we can try to find a solution. These Terms
            apply to all visitors, users and others who wish to access or use
            Service.
          </p>
        </CardContent>
      </Card>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='communications'>
          <AccordionTrigger>Communications</AccordionTrigger>
          <AccordionContent>
            <p>
              By using our Service, you agree to subscribe to newsletters,
              marketing or promotional materials and other information we may
              send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing at vmpowerdeckfence@gmail.com.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='purchases'>
          <AccordionTrigger>Purchases</AccordionTrigger>
          <AccordionContent>
            <p>
              If you wish to purchase any product or service made available
              through Service (&#34;Purchase&#34;), you may be asked to supply
              certain information relevant to your Purchase including but not
              limited to, your credit or debit card number, the expiration date
              of your card, your billing address, and your shipping information.
            </p>
            <p className='mt-2'>
              You represent and warrant that: (i) you have the legal right to
              use any card(s) or other payment method(s) in connection with any
              Purchase; and that (ii) the information you supply to us is true,
              correct and complete.
            </p>
            <p className='mt-2'>
              We reserve the right to refuse or cancel your order at any time
              for reasons including but not limited to: product or service
              availability, errors in the description or price of the product or
              service, error in your order or other reasons.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='refunds'>
          <AccordionTrigger>Refunds</AccordionTrigger>
          <AccordionContent>
            <p>
              We issue refunds for Contracts within 30 days of the original
              purchase of the Contract.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='content'>
          <AccordionTrigger>Content</AccordionTrigger>
          <AccordionContent>
            <p>
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material (&#34;Content&#34;). You are responsible for
              Content that you post on or through Service, including its
              legality, reliability, and appropriateness.
            </p>
            <p className='mt-2'>
              By posting Content on or through Service, You represent and
              warrant that: (i) Content is yours (you own it) and/or you have
              the right to use it and the right to grant us the rights and
              license as provided in these Terms, and (ii) that the posting of
              your Content on or through Service does not violate the privacy
              rights, publicity rights, copyrights, contract rights or any other
              rights of any person or entity. We reserve the right to terminate
              the account of anyone found to be infringing on a copyright.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='prohibited-uses'>
          <AccordionTrigger>Prohibited Uses</AccordionTrigger>
          <AccordionContent>
            <p>
              You may use Service only for lawful purposes and in accordance
              with Terms. You agree not to use Service:
            </p>
            <ul className='list-disc list-inside mt-2'>
              <li>
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li>
                For the purpose of exploiting, harming, or attempting to exploit
                or harm minors in any way by exposing them to inappropriate
                content or otherwise.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material, including any &#34;junk mail&#34;,
                &#34;chain letter,&#34; &#34;spam,&#34; or any other similar
                solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate Company, a Company
                employee, another user, or any other person or entity.
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful, or in
                connection with any unlawful, illegal, fraudulent, or harmful
                purpose or activity.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='changes'>
          <AccordionTrigger>Changes To Service</AccordionTrigger>
          <AccordionContent>
            <p>
              We reserve the right to withdraw or amend our Service, and any
              service or material we provide via Service, in our sole discretion
              without notice. We will not be liable if for any reason all or any
              part of Service is unavailable at any time or for any period. From
              time to time, we may restrict access to some parts of Service, or
              the entire Service, to users, including registered users.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='amendments'>
          <AccordionTrigger>Amendments To Terms</AccordionTrigger>
          <AccordionContent>
            <p>
              We may amend Terms at any time by posting the amended terms on
              this site. It is your responsibility to review these Terms
              periodically.
            </p>
            <p className='mt-2'>
              Your continued use of the Platform following the posting of
              revised Terms means that you accept and agree to the changes. You
              are expected to check this page frequently so you are aware of any
              changes, as they are binding on you.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='governing-law'>
          <AccordionTrigger>Governing Law</AccordionTrigger>
          <AccordionContent>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Pennsylvania, United States, without regard to its
              conflict of law provisions.
            </p>
            <p className='mt-2'>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service and supersede and replace any prior agreements we might
              have had between us regarding Service.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='contact'>
          <AccordionTrigger>Contact Us</AccordionTrigger>
          <AccordionContent>
            <p>
              If you have any questions about these Terms, please contact us:
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
