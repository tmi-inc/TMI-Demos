import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { useEffect } from "react";
import googleApi from "../../../../api/googleApi";

import tmiLogoIcon from "../../../../assets/images/icons/tmi_color_logo.svg";

const GoogleMap = (props: any) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

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
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(GoogleMap);
