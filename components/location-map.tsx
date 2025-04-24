'use client'

import type React from 'react'

interface LocationMapProps {
  latitude: number
  longitude: number
}

const LocationMapComponent: React.FC<LocationMapProps> = ({
  latitude,
  longitude,
}) => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155720122!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQwJzQyLjQiTiA3NcKwMTMnMTQuNyJX!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus`

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

export default LocationMapComponent
