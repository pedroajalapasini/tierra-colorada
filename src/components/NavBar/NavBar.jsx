import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import Button from "../Button/Button";

function NavBar() {
  return (
    <header>
      <nav className="my-1">
        <ul className="menu-nav">
          <Brand />
          <NavItem to="/">
            <Link to="/category/Salta" className="category-link">
              Salta
            </Link>
            <Link to="/category/Jujuy" className="category-link">
              Jujuy
            </Link>
            <Link to="/category/Iguazú" className="category-link">
              Iguazú
            </Link>
            <Link to="/category/Tucumán" className="category-link">
              Tucumán
            </Link>
            <Link to="/cart" className="category-link">
              {" "}
              <CartWidget />{" "}
            </Link>
            <Button/>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
