import React from "react";
import Link from "next/link";
import "./style.css";

const Navbar = () => (
  <div className="navbar">
    <Link href="/">
      <a className="active" href="#">
        Input to MongoDB Database
      </a>
    </Link>

    <Link href="/Retrieve">
      <a className="hover" href="#">
        Retrieve from MongoDB Database
      </a>
    </Link>
  </div>
);

export default Navbar;
