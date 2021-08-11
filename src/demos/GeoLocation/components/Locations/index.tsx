import React, { useEffect } from 'react'
import { FirestoreCollection } from '@react-firebase/firestore'
import { useState } from 'react'
import {sortByDistance} from '../../utils'

const LocationList = ({locations, sortFrom}: LocationListProps) => {
  const [sortedLocations, setSortedLocations] = useState<Location[] | []>([])

  useEffect(() => {
    if(sortFrom === 'error'){
      console.log('init')
      setSortedLocations(locations)
    }
    
    if(sortFrom){
      console.log(sortFrom)

      setSortedLocations(sortByDistance(locations, sortFrom))
    }
  }, [sortFrom])

  return (
    <div style={{textAlign: 'left', marginLeft: '30px'}}>
      {!sortedLocations.length && <p>loading...</p>}
      {sortedLocations.map(location => (
        <div key={location.geolocation.latitude}>
          <h1>{location.title}</h1>
          <div>
            <p>{location.address?.street}</p>
            <p>{location.address?.city}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Locations({sortFrom}: LocationsProps) {
  return (
    <FirestoreCollection path='/locations/'>
      {d => {
        return (
          d.isLoading 
            ? 'loading...'
            : <LocationList locations={d.value} sortFrom={sortFrom} />
        )
      }}
    </FirestoreCollection>
  )
}
