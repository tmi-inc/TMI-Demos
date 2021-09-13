import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//demos
// import GeoLocation from "./demos/GeoLocation";
import VaccineLocator from "./demos/VaccineLocator";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* depricated, need to reimplement firebase methods */}
          {/* <Route path="/geo-locator">
              <GeoLocation />
            </Route> */}
          <Route path="/vaccine-locator">
            <VaccineLocator />
          </Route>
          <Route path="/">
            <div>
              <h1>Hello World</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
