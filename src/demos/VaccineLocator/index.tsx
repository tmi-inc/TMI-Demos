import React, { useEffect, useState } from "react";
import StaticMap from "./components/StaticMap";
import SideBar from "./components/SideBar";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      {locationInfo ? (
        <StaticMap locationInfo={locationInfo} />
      ) : (
        <h1>...loading...</h1>
      )}
    </div>
  );
}
