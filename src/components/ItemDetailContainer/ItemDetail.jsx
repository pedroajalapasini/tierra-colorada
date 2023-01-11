
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ title, imgurl, category, price, detail}) {
  return (
    <div className="card-detail">
      <div className="card-detail_title">
        <h2>{title}</h2>
      </div>
      <div className="card-detail_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail_detail">
        <p>{detail}</p>
        <h3 className="card-detail_price">$ {price}</h3>
        <span>{category}</span>
        <ItemCount/>
      </div>
    </div>
  );
}


