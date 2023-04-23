import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const agregarProducto = (nuevoItem, cantidad) => {
    const newCart = [...carrito];
    if (existeProducto(nuevoItem.id)) {
      const idx = carrito.findIndex(({ item }) => item.id === nuevoItem.id);
      newCart[idx].cantidad += cantidad;
    } else {
      const newItem = { item: nuevoItem, cantidad };
      newCart.push(newItem);
    }
    setCarrito(newCart);
  };
  const existeProducto = (id) =>
    carrito.some(({ item }) => {
      return item.id === id;
    });

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(({ item }) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const calcularTotal = () =>
    carrito.reduce((acu, cur) => acu + cur.item.precio * cur.cantidad, 0);

  const contarProductos = () =>
    carrito.reduce((acu, cur) => acu + cur.cantidad, 0);

  const estaVacio = () => carrito.length === 0;

  return (
    <CartContext.Provider
      value={{
        agregarProducto,
        existeProducto,
        eliminarProducto,
        vaciarCarrito,
        calcularTotal,
        contarProductos,
        estaVacio,
        carrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
