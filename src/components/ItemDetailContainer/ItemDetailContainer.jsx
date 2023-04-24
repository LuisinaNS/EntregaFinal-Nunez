import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/loading.jsx";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, modificarItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProd = async () => {
    const db = getFirestore();
    const prodRef = doc(db, "productos", id);
    const document = await getDoc(prodRef);
    const item = { id: document.id, ...document.data() };
    modificarItem(item);
    setLoading(false);
  };
  useEffect(() => {
    getProd();
  }, [id]);

  return loading ? (
    <Loading container={true} />
  ) : (
    <ItemDetail itemDetalle={item} />
  );
};

export default ItemDetailContainer;
