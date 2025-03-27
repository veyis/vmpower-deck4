import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { CareerContent } from '@/components/career-content'

export const metadata: Metadata = {
  title: 'Careers at VM Power Deck | Join Our Team',
  description:
    'Explore exciting career opportunities at VM Power Deck. Join our team of passionate professionals and help transform outdoor living spaces across Pennsylvania and New Jersey.',
  openGraph: {
    title: 'Careers at VM Power Deck | Join Our Team',
    description:
      'Explore exciting career opportunities at VM Power Deck. Join our team of passionate professionals and help transform outdoor living spaces across Pennsylvania and New Jersey.',
    images: [
      {
        url: '/images/careers-og.webp',
        width: 1200,
        height: 630,
        alt: 'VM Power Deck Careers',
      },
    ],
  },
}

export default function CareerPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Careers', href: '/career' }]} />
      <CareerContent />
    </>
  )
}
