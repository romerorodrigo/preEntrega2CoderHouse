import { useEffect, useState } from "react";

export const Cart = () => {

    const [verArticulos, setVerArticulos] = useState([]);
    const arrArticulos = [];

    const vaciarCarro = () => {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const clave = localStorage.key(i);
        localStorage.removeItem(clave);
      }
    };

    useEffect(() => {
        arrArticulos.splice(0);
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            const valor = localStorage.getItem(clave);
            arrArticulos.push(valor);
        }
        setVerArticulos(arrArticulos);
    }, []);
 
  return (
    <div>
      {verArticulos.length === 0 ? <h2>Carrito vacío</h2> : 
        verArticulos.map((item, index) => (<li key={index}>{item}</li>))}
      <div>
        {verArticulos.length > 0 ? <button onClick={vaciarCarro}>Vaciar Carro</button> : <b></b>}
      </div>
    </div>
  )
}
