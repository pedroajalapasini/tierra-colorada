import { useState, useEffect } from "react";
import getProducts,{getProductByCategory} from "../../services/mockProducts";
import { useParams } from "react-router-dom";

import React from "react";
import ItemList from "./ItemList";
import Flex from "../Flex/Flex";
import "./ItemCard.css";

export default function ItemListContainer() {
  const [packProduct, setPackProduct] = useState([]);
  let { idcategory } = useParams();
  useEffect(() => {
    if (!idcategory) {
      getProducts()
        .then((resp) => {
          setPackProduct(resp);
        })
        .catch((error) => alert(error));
    } else {
      getProductByCategory(idcategory).then((respuesta) => {
        setPackProduct(respuesta);
      });
    }
  }, [idcategory]);

  return (
    <Flex>
      {packProduct.map((item) => {
        return <ItemList item={item} id={item.id} key={item.id} />;
      })}
    </Flex>
  );
}
