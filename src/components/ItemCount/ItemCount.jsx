import { useState } from "react";
import Button from "../Button/Button";

function ItemCount() {
  const [countProduct, setCountProduct] = useState(0);

  function handleAdd() {
    setCountProduct(countProduct + 1);
  }

  function handleSubst() {
    if (countProduct < 0) {
    }
    setCountProduct(countProduct - 1);
  }

  return (
    <div className="container_item-count">
      <span>Agregá tus productos al carrito</span>
      <div className="control_item-count">
        <Button onClick={handleSubst}>-</Button>
        <span className="itemcount_count">{countProduct}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>

      <div className="btns_item-count">
        <a href="/cart">
          <Button>Agregar al carrito</Button>
        </a>
      </div>
    </div>
  );
}

export default ItemCount;
