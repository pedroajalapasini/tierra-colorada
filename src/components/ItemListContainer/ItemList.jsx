import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons/Button";
import ItemListContainer from "./ItemListContainer";

export default function ItemList(props) {
  const { title, img, category, price, id } = props.item;
  return (
    <div className="card-item">
      <div className="card-item_title">
        <h3>{title}</h3>
      </div>
      <div className="card-item_img">
        <img src={img} alt={title} />
      </div>
      <div className="card-item_detail">
        <h4 className="card-item_price">${price}</h4>
        <span>{category}</span>
      </div>
      <Link to={`/detalle/${id}`}>
          <Button padding="22px" color="purple">
            Ver más
          </Button>
        </Link>
    </div>
  );
}
