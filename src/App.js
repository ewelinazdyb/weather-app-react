import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faWind, faWater, faCloud } from "@fortawesome/free-solid-svg-icons";
library.add(faWind, faWater, faCloud);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Paris" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
