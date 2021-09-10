import firebase from "../firebase";
import { query, collection, getDocs, getDoc, where } from "firebase/firestore";

const allLocationsRef = collection(firebase.db, "allLocations");

const getAllLocations = async () => {
  const locations: any = [];
  const snapShot = await getDocs(allLocationsRef);
  snapShot.forEach((doc: any) => locations.push(doc.data()));

  return locations;
};

const getLocationBySlug = async (slug: string) => {
  let location;
  const q = query(allLocationsRef, where("slug", "==", slug));
  const snapShot = await getDocs(q);
  snapShot.forEach((doc: any) => (location = doc.data()));

  if (location) {
    return location as FirebaseLocation;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllLocations,
  getLocationBySlug,
};
