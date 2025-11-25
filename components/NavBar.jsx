import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="nav-container nav2">
      <div className="logo">
        <Link href="/">Portfolio de Samiha Kallel</Link>
      </div>
      <a href="" className="cv-btn">
        CV
      </a>
    </div>
  );
};

export default NavBar;
