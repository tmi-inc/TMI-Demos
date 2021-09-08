import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FirestoreProvider } from "@react-firebase/firestore";
import config from "./firebase";
import firebase from "firebase";

//demos
import GeoLocation from "./demos/GeoLocation";
import VaccineLocator from "./demos/VaccineLocator";

function App() {
  return (
    <div className="App">
      <Router>
        <FirestoreProvider {...config} firebase={firebase}>
          <Switch>
            <Route path="/geo-locator">
              <GeoLocation />
            </Route>
            <Route path="/vaccine-locator">
              <VaccineLocator />
            </Route>
            <Route path="/">
              <div>
                <h1>Hello World</h1>
              </div>
            </Route>
          </Switch>
        </FirestoreProvider>
      </Router>
    </div>
  );
}

export default App;
