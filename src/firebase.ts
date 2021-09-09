import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  databaseURL: string;
};

const config: FirebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  authDomain: "tmi-geocode.firebaseapp.com",
  projectId: "tmi-geocode",
  storageBucket: "tmi-geocode.appspot.com",
  messagingSenderId: "824911049311",
  appId: "1:824911049311:web:5ee9f95e851b92faf321ea",
  measurementId: "G-2LZZFGGF7C",
  databaseURL: "https://tmi-geocode-default-rtdb.firebaseio.com/",
};

const app = initializeApp(config);
const db = getFirestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default { db, app };
