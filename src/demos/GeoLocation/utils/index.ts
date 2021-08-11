import {GeoType} from '..'


export function haversine_distance(mk1: GeoType, mk2: GeoType) {
  const R = 3958.8; // Radius of the Earth in miles
  const rlat1 = mk1.latitude * (Math.PI/180); // Convert degrees to radians
  const rlat2 = mk2.latitude * (Math.PI/180); // Convert degrees to radians
  const difflat = rlat2-rlat1; // Radian difference (latitudes)
  const difflon = (mk2.longitude-mk1.longitude) * (Math.PI/180); // Radian difference (longitudes)

  const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}

export function sortByDistance(locations: Location[], target: GeoType) {
  return locations.reduce((acc: LocationWithDistance[], location) => {
    const distanceFromTarget = haversine_distance(target, location.geolocation)
    const locationWithDistance = {...location, distanceFromTarget}
    acc = [...acc, locationWithDistance]
    return acc.sort((a, b) => {
      return a.distanceFromTarget - b.distanceFromTarget
    })
  }, [])
}