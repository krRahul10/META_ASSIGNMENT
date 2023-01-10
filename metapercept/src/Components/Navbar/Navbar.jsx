import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="main_navbar_div">
        <div className="left_div">
          <h3>Title</h3>
        </div>
        <div className="right_div">
          <div>Home</div>
          <div>About</div>
          <div>Blog</div>
          <div>Contact</div>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
