export type firebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  databaseURL: string;
}

const config: firebaseConfig = {
  apiKey: "AIzaSyCXCfrbjBYwofbLtXgTrNhHezY_pSai_dM",
  authDomain: "tmi-geocode.firebaseapp.com",
  projectId: "tmi-geocode",
  storageBucket: "tmi-geocode.appspot.com",
  messagingSenderId: "824911049311",
  appId: "1:824911049311:web:5ee9f95e851b92faf321ea",
  measurementId: "G-2LZZFGGF7C",
  databaseURL: 'https://tmi-geocode-default-rtdb.firebaseio.com/'
}

export default config