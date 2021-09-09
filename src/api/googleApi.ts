import axios, { AxiosRequestConfig } from "axios";
import { GeoType } from "../demos/GeoLocation";

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

//search within a 5 mile radius hard coded, can be changed later if needed to a dynamic value
const nearbySearchRequest = async (
  geolocation: GeoType,
  keywordString: string
) => {
  const baseUrl =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
  const encodedKeywordString = encodeURIComponent(keywordString);

  const config: AxiosRequestConfig = {
    method: "get",
    url: `${baseUrl}?location=${geolocation.latitude}%2C${geolocation.longitude}&radius=8200&keyword=${encodedKeywordString}&key=${googleApiKey}`,
  };

  return axios(config);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nearbySearchRequest,
};
