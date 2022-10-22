import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";


function App() {
  const Carts = localStorage.getItem('Carts') == null ? [] : JSON.parse(localStorage.getItem('Carts'));
  const [CartItem, setCartItem] = useState(Carts)
  return (
    <Routes>
      <Route path="/" element={<Home setCartItem={setCartItem} CartItem={CartItem}></Home>}></Route>
      <Route path="/cart" element={<Cart setCartItem={setCartItem} CartItem={CartItem}></Cart>}></Route>

    </Routes>
  );
}

export default App;
