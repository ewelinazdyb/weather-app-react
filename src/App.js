import "./App.css";
import ReactDOM from "react-dom";
import Search from "./Search";
import Date from "./Date";
import Forecast from "./Forecast";
import Footer from "./Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faWind, faWater, faCloud } from "@fortawesome/free-solid-svg-icons";
library.add(faWind, faWater, faCloud);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Date />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
