import { Button } from "../Buttons/Button";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ title, img, category, price, onAddCart}) {
  return (
    <div className="card-detail">
      <div className="card-detail_title">
        <h2>{title}</h2>
      </div>
      <div className="card-detail_img">
        <img src={img} alt={title} />
      </div>
      <div className="card-detail_detail">
        <h3 className="card-detail_price">$ {price}</h3>
        <span>{category}</span>
        <ItemCount onAddCart={onAddCart} />
      <a href="/cart">
        <Button>Comprar</Button>
      </a>
      </div>
    </div>
  );
}


