import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Breadcrumb } from '@/components/breadcrumb'
import { MaterialRecommendationTool } from '@/components/material-recommendation-tool'
import { materialCategories, comparisonData } from '@/data/materials'

export default function MaterialsPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header Section */}
      <header className='bg-primary text-primary-foreground py-12'>
        <div className='container mx-auto px-4'>
          <Breadcrumb
            items={[{ label: 'Materials', href: '/materials' }]}
            variant='light'
          />
          <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent'>
            Ultimate Guide to Decking Materials
          </h1>
          <p className='text-xl'>For Pennsylvania, New Jersey Homeowners</p>
        </div>
      </header>

      <section className='container mx-auto px-4 py-12'>
        {/* Introduction Section */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-blue-900'>Introduction</h2>
          <p className='text-lg mt-2'>
            At VM Power Construction, we help you choose the best decking
            materials for durability, aesthetics, and maintenance.
          </p>
        </div>

        {/* Decking Material Categories */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-blue-900'>
            Decking Material Categories
          </h2>
          <Tabs
            defaultValue={materialCategories[0]?.name
              .toLowerCase()
              .replace(/\s+/g, '-')}
            className='w-full mt-4'
          >
            <TabsList className='grid w-full grid-cols-2 lg:grid-cols-5'>
              {materialCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name.toLowerCase().replace(/\s+/g, '-')}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {materialCategories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name.toLowerCase().replace(/\s+/g, '-')}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className='text-blue-900'>
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <Image
                        src={category.image || '/images/hero-deck-1.webp'}
                        alt={category.name}
                        width={400}
                        height={300}
                        className='rounded-lg object-cover w-full h-64'
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px'
                        quality={75}
                        placeholder='blur'
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7sgAAAABJRU5ErkJggg=='
                      />
                      <Accordion type='single' collapsible>
                        {category.brands.map((brand, index) => (
                          <AccordionItem
                            key={brand.name}
                            value={`item-${index}`}
                          >
                            <AccordionTrigger>{brand.name}</AccordionTrigger>
                            <AccordionContent>
                              {brand.features}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Material Comparison Table */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-blue-900'>
            Decking Material Comparison
          </h2>
          <ScrollArea className='h-[400px] w-full rounded-md border mt-4'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Material</TableHead>
                  <TableHead>Lifespan</TableHead>
                  <TableHead>Maintenance</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Durability</TableHead>
                  <TableHead>Eco-Friendly</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.material}>
                    <TableCell className='font-medium'>
                      {row.material}
                    </TableCell>
                    <TableCell>{row.lifespan}</TableCell>
                    <TableCell>{row.maintenance}</TableCell>
                    <TableCell>{row.cost}</TableCell>
                    <TableCell>{row.bestFor}</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Progress
                              value={row.durability * 20}
                              className='w-[60px]'
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Durability: {row.durability}/5</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>

        <MaterialRecommendationTool />

        {/* CTA Section */}
        <div className='bg-primary text-primary-foreground p-8 rounded-lg text-center mt-12'>
          <h2 className='text-2xl font-bold'>
            Ready to start your decking project?
          </h2>
          <p className='text-lg mt-2'>
            Contact us today for a free consultation!
          </p>
          <Link href='/contact' className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
            <Phone className='mr-2 h-4 w-4' /> Get a Free Quote{' '}
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </section>
    </div>
  )
}
