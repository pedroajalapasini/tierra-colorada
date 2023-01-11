import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <>
    <li className="item-nav">
    <Link className="nav-link" to={to}>
        {children}
      </Link>
    </li>
  </>
);
export default NavItem;
