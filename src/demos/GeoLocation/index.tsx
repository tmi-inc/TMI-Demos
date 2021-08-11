import React, { useEffect } from 'react'
import { useState } from 'react'
import Geocode from 'react-geocode'
import Locations from './components/Locations'

export interface GeoType {
  latitude:  number;
  longitude: number;
}

if(process.env.REACT_APP_GOOGLE_API_KEY){
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
}

const geo = navigator.geolocation

function GeoLocationApp() {
  const [formInput, setFormInput] = useState<string>('')
  const [targetPosition, setTargetPosition] = useState<GeoType | 'error' | null>(null)

  const getPositionSuccess = (position: GeolocationPosition) => {
    const {longitude, latitude} = position.coords
    setTargetPosition({longitude, latitude})
  }
  
  const getPositionFailed = (error: GeolocationPositionError) => {
    setTargetPosition('error')
  }
  
  useEffect(() => {
    geo.getCurrentPosition(getPositionSuccess, getPositionFailed)
  }, [])
  
  const handleGeoFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const res = await Geocode.fromAddress(formInput)
    const {lat, lng} = res.results[0].geometry.location
    
    const geolocation = {
      latitude: lat,
      longitude: lng
    }
    setTargetPosition(geolocation)
  }

  return (
    <div>
      <h1>Geo Location App Demo</h1>

      <form onSubmit={handleGeoFormSubmit}>
        <input type="text" value={formInput} onChange={(e) => setFormInput(e.target.value)} />
        <button>check distance from</button>
      </form>

      <Locations sortFrom={targetPosition} />

    </div>
  )
}

export default GeoLocationApp
