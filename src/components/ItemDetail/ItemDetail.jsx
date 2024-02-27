import {ItemCount} from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

export const ItemDetail = ({ id, name, description, img, price, stock, category }) => {
    const navAnt = `/category/${category}`;
    return (
    <div className="border m-3">
      <div className="card" >
        <div className="card-body text-center" style={{ backgroundColor: 'darkgray', borderColor: 'black' }}>
          <h3 className="card-title">{name}</h3>
          <img src={img} alt="" />
          <p className="card-text text-lg"> {description} </p>
          <p>Precio: {price} </p>
          <div className="container">
            <ItemCount id={id} product={name} stock={stock} />
          </div>
        </div>
      </div>
        <Link to={navAnt}>
          <button className="btn btn-dark">Volver</button>
        </Link>
    </div>
  );
};
