import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className="my-1">
      <ul className="menu-nav">
        <Brand />
        <NavItem to="/">
          <Link to="/category/salta" className="category-link">
            Salta
          </Link>
          <Link to="/category/jujuy" className="category-link">
            Jujuy
          </Link>
          <Link to="/category/iguazu" className="category-link">
            Iguazú
          </Link>
          <Link to="/category/tucuman" className="category-link">
            Tucumán
          </Link>
          <Link to="/cart" className="category-link">
            {" "}
            <CartWidget />{" "}
          </Link>
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
