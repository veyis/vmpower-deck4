'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import type { Map, Marker } from 'leaflet'

interface LocationMapProps {
  latitude: number
  longitude: number
}

const LocationMapComponent: React.FC<LocationMapProps> = ({
  latitude,
  longitude,
}) => {
  const mapRef = useRef<Map | null>(null)
  const markerRef = useRef<Marker | null>(null)
  const [L, setL] = useState<typeof import('leaflet') | null>(null)

  useEffect(() => {
    // Import Leaflet only on client side
    if (typeof window !== 'undefined') {
      import('leaflet').then((leaflet) => {
        setL(leaflet.default)
      })
    }
  }, [])

  useEffect(() => {
    if (!L || typeof window === 'undefined') return

    // Initialize map only on client side
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([latitude, longitude], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)

      // Add marker
      markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current)
    }

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [L, latitude, longitude])

  return <div id="map" className="w-full h-full" />
}

export default LocationMapComponent
