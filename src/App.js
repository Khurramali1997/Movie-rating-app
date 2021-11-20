import "./App.css";
//import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <Navs></Navs>
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
        <Route element={<Error />}>Error for invalid routes</Route>
      </Routes>
    </div>
  );
}

export default App;
