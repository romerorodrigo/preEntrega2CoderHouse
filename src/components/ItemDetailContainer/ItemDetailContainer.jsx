import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

  const { itemId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => { 
    setIsLoading(true); 
    getProductById(itemId)
    .then( resp => {
      setItem(resp);
      setIsLoading(false); 
    })

   }, [])

  return (
    <>
      { isLoading ? <h2>Cargando producto ...</h2> : item && <ItemDetail {...item} />}
    </>
  )
}
