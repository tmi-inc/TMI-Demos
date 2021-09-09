import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { isAbsolute } from "path";
import React, { useEffect, useState } from "react";
import googleApi from "../../../../api/googleApi";

import tmiLogoIcon from "../../../../assets/images/icons/tmi_color_logo.svg";

const GoogleMap = (props: any) => {
  const [places, setPlaces] = useState<any[] | null>(null);

  useEffect(() => {
    console.log(props);
  }, [props]);

  const fetchPlaces = (mapProps: any, map: any) => {
    console.log(mapProps);
    console.log(map);
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "10000",
      keyword: "covid-19 vaccine",
    };

    service.nearbySearch(request, (res: any, status: any) => {
      setPlaces(res);
      console.log(res);
      console.log(status);
    });
  };

  return (
    <>
      <Map
        //@ts-expect-error
        zoom={13}
        google={props.google}
        initialCenter={{
          lat: 33.80904,
          lng: -118.13688,
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
            anchor: new props.google.maps.Point(32, 32),
            scaledSize: new props.google.maps.Size(54, 54),
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
