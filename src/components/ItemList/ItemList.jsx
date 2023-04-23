import styles from "./itemlist.module.scss";
import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <>
      <p className={styles.tittleContainer}>
        <span className={styles.title}>Nuestros Productos</span>
      </p>
      <div className={styles.container}>
        {items.map((item) => (
          <Item key={item.id} producto={item} />
        ))}
      </div>
    </>
  );
};
