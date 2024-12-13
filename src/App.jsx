import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import CaseStudies from "./pages/CaseStudies";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/case-studies" element={<CaseStudies/>} />
      </Routes>
    </div>
  );
};

export default App;
