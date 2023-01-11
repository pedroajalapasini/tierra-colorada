import React from "react";
import { Link } from "react-router-dom";
import  Button  from "../Button/Button";

export default function ItemList(props) {
  const { title, imgurl, category, price, id } = props.item;
  return (
    <div className="card-item">
      <div className="card-item_title">
        <h3>{title}</h3>
      </div>
      <div className="card-item_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-item_detail">
        <h4 className="card-item_price">${price}</h4>
        <span>{category}</span>
      </div>
      <Link to={`/detalle/${id}`}>
        <Button >Ver más</Button>
        </Link>
    </div>
  );
}
