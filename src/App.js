import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Service from "./Service";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/db").then((res) => {
      setServices(res.data.services);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home services={services} />}>
          Home
        </Route>
        <Route path="/AboutUs" element={<AboutUs />}>
          About Us
        </Route>
        <Route path="/Services/:type" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
