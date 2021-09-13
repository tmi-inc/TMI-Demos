import React, { useEffect, useState } from "react";
import StaticMap from "./components/StaticMap";
import SideBar from "./components/SideBar";
import useQuery from "../../hooks/useQuery";
import firestoreApi from "../../api/firestoreApi";
import { withErrorBoundary } from "react-error-boundary";
import LocationErrorFallback from "./components/ErrorFallbacks/LocationErrorFallback";

function VaccineLocator() {
  const [loading, setLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState<FirebaseLocation | null>(
    null
  );

  const query = useQuery();
  const getLocation = async () => {
    try {
      const res = await firestoreApi.getLocationBySlug(
        query.get("location") as string
      );

      if (res) setLocationInfo(res as FirebaseLocation);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query.get("location")) {
      throw new Error("You must include a location");
    }

    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!locationInfo) throw new Error("That location does not exist");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      {loading && <h1>...loading</h1>}
      {!loading && <StaticMap locationInfo={locationInfo} />}
    </div>
  );
}

export default withErrorBoundary(VaccineLocator, {
  FallbackComponent: LocationErrorFallback,
});
