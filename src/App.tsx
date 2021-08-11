import './App.css';
import GeoLocation from './demos/GeoLocation'
import {FirestoreProvider} from '@react-firebase/firestore'
import config from './firebase'
import firebase from 'firebase';


function App() {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <div className='App'>
        <GeoLocation />
      </div>
    </FirestoreProvider>
  );
}

export default App;
