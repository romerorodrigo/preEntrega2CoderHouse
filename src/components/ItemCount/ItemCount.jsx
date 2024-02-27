import { useState } from "react";

export const ItemCount = ({ id, product, stock, initial = 1 }) => {
  const [qty, setQty] = useState(initial);

  const increment = () => {
    if (qty < stock) 
    {
      return setQty(qty + 1);
    }
    setQty(qty);
  };

  const decrement = () => {
    if (qty === 0) 
    {
      return setQty(0);
    }
    setQty(qty - 1);
  };

  const agregarAlCarrito = () => {
    const valorCarro = `Producto: ${product} - Cantidad: ${qty}`
    localStorage.setItem(id, valorCarro);
    console.log( localStorage.getItem("qty"));
    console.log( qty);
  };

    return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="mx-4" onClick={decrement}> - </button>
          <h2>{qty}</h2>
        <button className="mx-4" onClick={increment}> + </button>
      </div>
      <div className="d-flex justify-content-center"> 
        <button className="Button" onClick={agregarAlCarrito} disabled={!stock}>
          Agregar al carrito
        </button> 
      </div>
    </div>
  );
};
