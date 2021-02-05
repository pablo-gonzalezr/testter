import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="btn btn-outline-info mr-5">
        Home
      </Link>
      <Link to="/favoritos" className="btn btn-secondary ml-5">
        favoritos
      </Link>
    </div>
  );
};

export default Navbar;
