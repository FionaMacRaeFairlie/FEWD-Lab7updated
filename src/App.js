import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import Locations from "./components/Locations";
import Navigation from "./components/Navigation";import NoPage from "./components/NoPage";

import Person from "./components/Person";
import { people } from "./data/data";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<People people={people} />}>
            <Route path=":personId" element={<Person people={people} />} />
          </Route>
          <Route path="locations" element={<Locations />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
 