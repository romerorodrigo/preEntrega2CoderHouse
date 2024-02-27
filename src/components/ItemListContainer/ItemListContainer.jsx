import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainerStyle.css'

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect( () => { 
    setIsLoading(true); 

    getProducts()
      .then( resp => {
        if(categoryId) {
          const prodFilter = resp.filter( product => product.category === categoryId );
          setProducts(prodFilter)
        } else {
          setProducts(resp);
        }
        setIsLoading(false);
      })

   }, [categoryId] )

  return (
    <> 
      <div className="container d-flex justify-content-between" style={{ backgroundColor: 'black', borderColor: 'white' }}>  
        { isLoading ? <h2>Cargando productos ...</h2> : <ItemList products={products} /> }
      </div>
    </>
  )
}