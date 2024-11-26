import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="flex p-10 justify-between">
        <h1 className="font-bold text-4xl">Top Leads</h1>
        <div className="text-xl flex gap-5">
          <NavLink className="h-fit px-3 rounded-full" to="/" >Home</NavLink>
          <NavLink className="h-fit px-3 rounded-full" to="/about" >AboutUs</NavLink>
          <NavLink className="h-fit px-3 rounded-full" to="/services" >Services</NavLink>
          <NavLink className="h-fit px-3 rounded-full" to="/case" >Case Studies</NavLink>
            </div>
            <button className="btn rounded-full px-6 h-fit gradient text-white">CALL NOW</button>
      </div>
    );
};

export default Navbar;
