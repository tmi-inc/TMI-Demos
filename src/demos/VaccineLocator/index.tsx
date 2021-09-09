import React, { useEffect, useState } from "react";
import GoogleMap from "./components/GoogleMap";
import Header from "./components/Header";
import useQuery from "../../hooks/useQuery";
import firestoreApi from "../../api/firestoreApi";

//types
import { FirebaseLocation } from "../../types/firebase-types";

export default function VaccineLocator() {
  const [locationInfo, setLocationInfo] = useState<FirebaseLocation | null>(
    null
  );

  const query = useQuery();
  const getLocation = async () => {
    try {
      const res = await firestoreApi.getLocationBySlug(
        query.get("location") as string
      );

      if (res) setLocationInfo(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <Header />
      {locationInfo ? (
        <GoogleMap locationInfo={locationInfo} />
      ) : (
        <h1>...loading...</h1>
      )}
    </div>
  );
}
