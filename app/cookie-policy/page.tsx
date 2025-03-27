import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Breadcrumb } from '@/components/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Shield, AlertTriangle, Info, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: 'Cookie Policy & Third-Party Cookies | VM Power Deck',
  description:
    "Learn about third-party cookies, how they affect your privacy, and Chrome's new approach to browsing without them.",
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Breadcrumb
        items={[
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Cookie Policy', href: '/cookie-policy' },
        ]}
      />
      <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
        Understanding Third-Party Cookies
      </h1>
      <p className='text-xl text-center mb-12 max-w-3xl mx-auto text-muted-foreground'>
        Learn about third-party cookies, how they affect your privacy, and
        Chrome&apos;s new approach to browsing without them.
      </p>

      <Tabs defaultValue='overview' className='w-full mb-12'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='chrome'>Chrome&apos;s Approach</TabsTrigger>
          <TabsTrigger value='examples'>Cookie Examples</TabsTrigger>
          <TabsTrigger value='security'>Security Considerations</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='mt-6'>
          <Card>
            <CardHeader>
              <CardTitle>What Are Third-Party Cookies?</CardTitle>
              <CardDescription>
                Understanding the difference between first-party and third-party
                cookies
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                <strong>First-party cookies</strong> are created by the website
                you&apos;re visiting directly. These cookies help site owners
                provide a better user experience by remembering your
                preferences, login status, and other site-specific settings.
              </p>
              <p>
                <strong>Third-party cookies</strong> are created by domains
                other than the one you&apos;re visiting. These cookies are
                primarily used for tracking and advertising purposes across
                different websites. They allow third parties (like advertising
                networks, analytics companies, and social media platforms) to
                track your browsing behavior across multiple sites.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <div className='border rounded-lg p-4'>
                  <h3 className='font-semibold mb-2'>
                    Common Uses of Third-Party Cookies
                  </h3>
                  <ul className='list-disc pl-5 space-y-1'>
                    <li>Cross-site tracking for targeted advertising</li>
                    <li>Social media sharing and integration</li>
                    <li>Analytics and user behavior tracking</li>
                    <li>Embedded content functionality (videos, maps)</li>
                    <li>Retargeting campaigns</li>
                  </ul>
                </div>

                <div className='border rounded-lg p-4'>
                  <h3 className='font-semibold mb-2'>Privacy Concerns</h3>
                  <ul className='list-disc pl-5 space-y-1'>
                    <li>Tracking without explicit consent</li>
                    <li>Creating detailed user profiles across websites</li>
                    <li>Lack of transparency about data collection</li>
                    <li>Potential for data sharing with multiple entities</li>
                    <li>
                      Difficulty in controlling who has access to your data
                    </li>
                  </ul>
                </div>
              </div>

              <Alert className='mt-6'>
                <Info className='h-4 w-4' />
                <AlertTitle>How Third-Party Cookies Work</AlertTitle>
                <AlertDescription>
                  When you visit a website that includes elements from other
                  domains (like ads, social media buttons, or embedded videos),
                  these third-party domains can set and access their own cookies
                  in your browser. This allows them to track your activity
                  across all websites that use their services.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='chrome' className='mt-6'>
          <Card>
            <CardHeader>
              <CardTitle>
                Chrome&apos;s New Approach to Third-Party Cookies
              </CardTitle>
              <CardDescription>
                Google Chrome is moving towards a new experience that allows
                users to choose to browse without third-party cookies
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                Google Chrome, which accounts for approximately 65% of the
                global browser market, is gradually phasing out support for
                third-party cookies as part of its Privacy Sandbox initiative.
                This represents a significant shift in how the web handles user
                privacy and tracking.
              </p>

              <h3 className='text-xl font-semibold mt-6'>
                Key Changes in Chrome
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>
                      Cookie Settings Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Chrome now provides more granular controls for users to
                      manage third-party cookies, including the ability to block
                      them entirely while still allowing first-party cookies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>
                      Privacy Sandbox APIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Chrome is introducing new privacy-preserving APIs that
                      allow for certain advertising and measurement use cases
                      without relying on individual cross-site tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>Topics API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Replaces individual tracking with interest-based
                      categories that are processed locally on your device,
                      giving you more control over what information is shared.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>
                      Protected Audience API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Allows for remarketing and custom audiences without
                      sharing individual browsing behavior across sites, keeping
                      more of your data on your device.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className='text-xl font-semibold mt-6'>
                Timeline and Implementation
              </h3>
              <p>
                Google has been gradually rolling out these changes, with
                complete phase-out of third-party cookies expected by the end of
                2025. The company is taking a measured approach to ensure the
                web ecosystem has time to adapt to these significant changes.
              </p>

              <Alert className='mt-6'>
                <Info className='h-4 w-4' />
                <AlertTitle>What This Means For You</AlertTitle>
                <AlertDescription>
                  As a user, you&apos;ll have more control over your privacy
                  while browsing. Websites and advertisers are adapting to these
                  changes by exploring new ways to provide personalized
                  experiences that respect user privacy. You may notice changes
                  in how websites ask for your consent regarding cookies and
                  tracking.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='examples' className='mt-6'>
          <Card>
            <CardHeader>
              <CardTitle>Examples of Third-Party Cookies</CardTitle>
              <CardDescription>
                Common third-party cookies you might encounter while browsing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='mb-6'>
                Below are the third-party cookies currently used on our website.
                We have identified 37 third-party cookies in total, primarily
                from YouTube embeds, Google/Doubleclick ads, and other Google
                APIs/SDKs.
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>URL/Domain</TableHead>
                    <TableHead>Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* YouTube video cookies */}
                  <TableRow>
                    <TableCell className='font-medium'>LOGIN_INFO</TableCell>
                    <TableCell>
                      /embed/KO2xE2ZezRA?mute=1&rel=0 (www.youtube.com)
                    </TableCell>
                    <TableCell>
                      YouTube video functionality and preferences
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSID
                    </TableCell>
                    <TableCell>
                      /embed/KO2xE2ZezRA?mute=1&rel=0 (www.youtube.com)
                    </TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PAPISID
                    </TableCell>
                    <TableCell>
                      /embed/KO2xE2ZezRA?mute=1&rel=0 (www.youtube.com)
                    </TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSIDTS
                    </TableCell>
                    <TableCell>
                      /embed/KO2xE2ZezRA?mute=1&rel=0 (www.youtube.com)
                    </TableCell>
                    <TableCell>Google security cookie with timestamp</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSIDCC
                    </TableCell>
                    <TableCell>
                      /embed/KO2xE2ZezRA?mute=1&rel=0 (www.youtube.com)
                    </TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>

                  {/* Google/Doubleclick Ads cookies */}
                  <TableRow>
                    <TableCell className='font-medium'>ar_debug</TableCell>
                    <TableCell>
                      /pagead/id (googleads.g.doubleclick.net)
                    </TableCell>
                    <TableCell>Google/Doubleclick advertising cookie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>id</TableCell>
                    <TableCell>
                      /pagead/id (googleads.g.doubleclick.net)
                    </TableCell>
                    <TableCell>
                      Google/Doubleclick advertising cookie for ad targeting
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>DSID</TableCell>
                    <TableCell>
                      /pagead/id (googleads.g.doubleclick.net)
                    </TableCell>
                    <TableCell>
                      Google/Doubleclick advertising cookie for ad targeting
                    </TableCell>
                  </TableRow>

                  {/* Other Google APIs/SDKs utility cookies */}
                  <TableRow>
                    <TableCell className='font-medium'>COMPASS</TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>Google API/SDK utility cookie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>__Secure-OSID</TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>Google security cookie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>LSOLH</TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>Google API/SDK utility cookie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>__Host-3PLSID</TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>
                      Google security cookie with host restrictions
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSID
                    </TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PAPISID
                    </TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>NID</TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>
                      Google cookie for storing user preferences
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSIDTS
                    </TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>Google security cookie with timestamp</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      __Secure-3PSIDCC
                    </TableCell>
                    <TableCell>…th/OEWpvfUJs….js (www.google.com)</TableCell>
                    <TableCell>
                      Google security cookie for authentication
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Alert variant='destructive' className='mt-8'>
                <AlertTriangle className='h-4 w-4' />
                <AlertTitle>Important Privacy Note</AlertTitle>
                <AlertDescription>
                  The cookies listed above are third-party cookies that may be
                  set when visiting our website with embedded content such as
                  YouTube videos and Google services. We have identified 37
                  third-party cookies in total. The list above shows the most
                  common ones, but is not exhaustive. The specific cookies you
                  encounter may vary based on your browser settings and
                  interaction with the embedded content.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='security' className='mt-6'>
          <Card>
            <CardHeader>
              <CardTitle>Security Considerations</CardTitle>
              <CardDescription>
                Important security measures to protect against common web
                vulnerabilities
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='border rounded-lg p-6'>
                <div className='flex items-start gap-4'>
                  <Shield className='h-8 w-8 text-blue-600 mt-1' />
                  <div>
                    <h3 className='text-xl font-semibold'>
                      Content Security Policy (CSP)
                    </h3>
                    <p className='mt-2'>
                      A Content Security Policy is a critical security measure
                      that helps prevent Cross-Site Scripting (XSS) attacks by
                      controlling which resources can be loaded on your website.
                      A strong CSP restricts the sources of scripts, styles,
                      images, and other resources to trusted domains.
                    </p>
                    <div className='mt-4 bg-gray-100 p-4 rounded-md'>
                      <p className='font-mono text-sm'>
                        Content-Security-Policy: default-src &apos;self&apos;;
                        script-src &apos;self&apos; https://trusted-scripts.com;
                        style-src &apos;self&apos; https://trusted-styles.com;
                        img-src &apos;self&apos; https://trusted-images.com;
                        connect-src &apos;self&apos;
                        https://api.trusted-domain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border rounded-lg p-6'>
                <div className='flex items-start gap-4'>
                  <Shield className='h-8 w-8 text-blue-600 mt-1' />
                  <div>
                    <h3 className='text-xl font-semibold'>
                      HTTP Strict Transport Security (HSTS)
                    </h3>
                    <p className='mt-2'>
                      HSTS is a web security policy mechanism that helps protect
                      websites against protocol downgrade attacks and cookie
                      hijacking. It allows web servers to declare that browsers
                      should interact with them using only secure HTTPS
                      connections, and never via the insecure HTTP protocol.
                    </p>
                    <div className='mt-4 bg-gray-100 p-4 rounded-md'>
                      <p className='font-mono text-sm'>
                        Strict-Transport-Security: max-age=31536000;
                        includeSubDomains; preload
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border rounded-lg p-6'>
                <div className='flex items-start gap-4'>
                  <Shield className='h-8 w-8 text-blue-600 mt-1' />
                  <div>
                    <h3 className='text-xl font-semibold'>
                      Cross-Origin Opener Policy (COOP)
                    </h3>
                    <p className='mt-2'>
                      COOP allows you to ensure that your website is isolated
                      from other websites by controlling which websites can open
                      it in a new window or tab. This helps prevent cross-origin
                      attacks by isolating your origin from others, even when
                      opened in a new window.
                    </p>
                    <div className='mt-4 bg-gray-100 p-4 rounded-md'>
                      <p className='font-mono text-sm'>
                        Cross-Origin-Opener-Policy: same-origin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className='mt-4'>
                <Info className='h-4 w-4' />
                <AlertTitle>Why These Security Measures Matter</AlertTitle>
                <AlertDescription>
                  Implementing these security headers helps protect both your
                  website and your users from various attacks. They work
                  together to create multiple layers of security, making it
                  significantly harder for attackers to exploit vulnerabilities.
                  These measures are especially important when dealing with user
                  data and cookies.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className='mt-12 bg-blue-50 rounded-lg p-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4 text-blue-900'>
            Managing Your Cookie Preferences
          </h2>
          <p className='text-lg mb-8'>
            Most modern browsers allow you to view and manage cookies, as well
            as control which types of cookies you accept. Below are links to
            instructions for managing cookies in popular browsers.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              {
                name: 'Google Chrome',
                url: 'https://support.google.com/chrome/answer/95647',
              },
              {
                name: 'Mozilla Firefox',
                url: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
              },
              {
                name: 'Safari',
                url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac',
              },
              {
                name: 'Microsoft Edge',
                url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
              },
            ].map((browser, index) => (
              <a
                key={index}
                href={browser.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center p-4 border rounded-lg hover:bg-blue-100 transition-colors'
              >
                <span className='font-semibold mb-2'>{browser.name}</span>
                <ExternalLink className='h-4 w-4' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <p className='text-muted-foreground mb-4'>
          For more information about our privacy practices, please review our
          full Privacy Policy.
        </p>
        <Link href='/privacy-policy' passHref>
          <Button variant='outline'>View Privacy Policy</Button>
        </Link>
      </div>
    </div>
  )
}
