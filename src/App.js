import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./Pages/WhatsappIcon";
import About from "./component/About";
import Rooms from "./component/Rooms";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Page404 from "./component/Page404";

const App = () => {
  return (
    <HashRouter>
      <>
        <Navbar />
        <WhatsappIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-resort-in-kelve" element={<About />} />
          <Route path="/resort-with-rooms-in-kelve" element={<Rooms />} />
          <Route path="/resort-for-events-in-palghar" element={<Services />} />
          <Route path="/resort-near-kelve-beach" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    </HashRouter>
  );
};

export default App;
