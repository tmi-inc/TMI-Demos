declare interface LocationsProps {
  sortFrom: GeoType | null;
}

declare interface LocationListProps {
  locations: Location[];
  sortFrom: GeoType | null;
}

declare interface Location {
  geolocation: GeoType;
  address?:    Address;
  title:       string;
}

declare interface Address {
  zip:    string;
  city:   string;
  street: string;
  state:  string;
}

declare interface LocationWithDistance extends Location {
  distanceFromTarget: number
}


