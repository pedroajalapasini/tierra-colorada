import React from "react";
import { Link } from "react-router-dom";
const logourl = "https://i.imgur.com/B4JqCxL.png";

const Brand = (props) => (
  <Link to="/">
    <img src={logourl} alt={props.title}/>
  </Link>
);

export default Brand;
