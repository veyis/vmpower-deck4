'use client'

import LocationMap from '@/components/location-map'

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
