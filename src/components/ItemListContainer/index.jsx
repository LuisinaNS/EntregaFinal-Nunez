import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProds = async () => {
    const db = getFirestore();
    const productCollection = collection(db, "productos");
    let productos;
    if (id) {
      const q = query(productCollection, where("categoria", "==", id));
      productos = await getDocs(q);
    } else {
      productos = await getDocs(productCollection);
    }
    const parsedProductos = productos.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductos(parsedProductos);
    setLoading(false);
  };

  useEffect(() => {
    getProds();
  }, [id]);

  return loading ? <Loading /> : <ItemList items={productos} />;
};

export default ItemListContainer;
