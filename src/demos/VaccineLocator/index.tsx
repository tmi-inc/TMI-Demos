import React, { useEffect, useState } from "react";
import StaticMap from "./components/StaticMap";
import Header from "./components/Header";
import useQuery from "../../hooks/useQuery";
import firestoreApi from "../../api/firestoreApi";

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
        <StaticMap locationInfo={locationInfo} />
      ) : (
        <h1>...loading...</h1>
      )}
    </div>
  );
}
