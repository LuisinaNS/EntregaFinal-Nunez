import styles from "./itemDetail.module.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ itemDetalle }) => {
  const [productoAgregado, setProductoAgregado] = useState(false);

  const { agregarProducto } = useContext(CartContext);
  const onAdd = (cant) => {
    agregarProducto(itemDetalle, cant);
    setProductoAgregado(true);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h4 className={styles.tittle}> {itemDetalle.nombre}</h4>
          <div className={styles.cardBody}>
            <img src={itemDetalle.imagen} className={styles.imagen} />
            <div className={styles.contentBox}>
              <p>
                <strong>Descripción:</strong> {itemDetalle.descripcion}
              </p>
              <p>
                <strong>Precio </strong>${itemDetalle.precio}
              </p>
            </div>
          </div>
          {productoAgregado ? (
            <Link to={"/cart"} className={styles.btn}>
              <button className="btn btn-primary">Ir al Carrito</button>
            </Link>
          ) : (
            <ItemCount stock={itemDetalle.stock} inicial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
