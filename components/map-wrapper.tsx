'use client'

import dynamic from 'next/dynamic'

const LocationMap = dynamic(() => import('@/components/location-map'), {
  ssr: false,
  loading: () => (
    <div className="aspect-video relative rounded-md overflow-hidden bg-muted animate-pulse" />
  ),
})

export default function MapWrapper({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}) {
  return (
    <div className='aspect-video relative rounded-md overflow-hidden'>
      <LocationMap latitude={latitude} longitude={longitude} />
    </div>
  )
}
