import "./App.css";
//import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
//import Navs from "./components/Navs";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/">
          <Route exact path="/" element={<Home />}>
            Home Page
          </Route>
        </Route>
        <Route exact path="/Starred">
          <Route exact path="/Starred" element={<Starred />}>
            Starred Page
          </Route>
        </Route>
        <Route path="/error" element={<Error />}>
          Error for invalid routes
        </Route>
      </Routes>
    </div>
  );
}

export default App;
