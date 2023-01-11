import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/mockProducts";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [ProductDetail, setProductDetail] = useState([]);

  let params = useParams();

  useEffect(() => {
    getProduct(params.itemid)
      .then((resp) => {
        setProductDetail(resp);
      })
      .catch((error) => alert(error));
  }, [params.itemid]);

  return (
    <ItemDetail
      title={ProductDetail.title}
      img={ProductDetail.img}
      category={ProductDetail.category}
      price={ProductDetail.price}
    />
  );
}