import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Design from "../src/components/DesignTab";
import Requirement from "../src/components/Requirement";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          <Route path="/design" element={<Design />} />
          <Route path="/requirement" element={<Requirement />} />

          {/* <Route path="/py" element={<Pyramid />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
