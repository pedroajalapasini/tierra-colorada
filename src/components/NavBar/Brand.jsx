import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/tierra-c-brand.png";

const Brand = (props) => (
  <Link to="/">
    <img src={logo} alt={props.title}/>
  </Link>
);

export default Brand;
