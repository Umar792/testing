import logo from "./logo.svg";
import "./App.css";
import PageOne from "./Component/Pages/PageOne/PageOne";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTwo from "./Component/Pages/PageTwo/PageTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageOne />} />
        <Route path="/pagetwo" exact element={<PageTwo />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
