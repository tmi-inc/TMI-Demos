import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { useEffect, useState } from "react";

import tmiLogoIcon from "../../../../assets/images/icons/tmi_color_logo.svg";

const GoogleMap = ({ locationInfo, google }: any) => {
  const [places, setPlaces] = useState<any[] | null>(null);

  const fetchPlaces = (mapProps: any, map: any) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "3000",
      keyword: "covid-19 vaccine",
    };

    service.nearbySearch(request, (res: any, status: any) => {
      setPlaces(res);
    });
  };

  return (
    <>
      <Map
        //@ts-expect-error
        zoom={14}
        google={google}
        initialCenter={{
          lat: locationInfo.geoLocation.latitude,
          lng: locationInfo.geoLocation.longitude,
        }}
        containerStyle={{
          height: "92vh",
          width: "100%",
        }}
        onReady={fetchPlaces}
      >
        <Marker
          //@ts-expect-error
          name={"your position"}
          icon={{
            url: tmiLogoIcon,
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(54, 54),
          }}
        />
        {places &&
          places.map((place) => (
            <Marker
              key={place.place_id}
              //@ts-expect-error
              name={place.name}
              position={place.geometry.location}
            />
          ))}
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(GoogleMap);
