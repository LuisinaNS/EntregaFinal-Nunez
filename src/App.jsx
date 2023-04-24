import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import DefaultFailView from "./components/DefaultFailView/DefaultFailView";
import Checkout from "./components/Chekout/Checkout";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="Parent">
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<DefaultFailView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
