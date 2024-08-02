import React from "react";

import { Link } from "react-router-dom";
function Header({ setAllshow, setIsShow }) {
  const handleLogout = () => {
    setAllshow(false);
    setIsShow(true);
  };
  return (
    // <h1 className="bg-">Header</h1>
    <div className="flex justify-center space-x-20 pt-7 font-semibold">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}
export default Header;
