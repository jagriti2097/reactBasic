import React from "react";
import "./Homepage.css";
import "./Navbar.css";
import logo from "../assests/logo_git.png";

const Navbar: React.FC<{}> = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <div className="space"></div>
      <a href="/">Home</a>
      <a href="/search">Search</a>
    </nav>
  );
};

export default Navbar;
