import React from 'react';
import CartDetail from '../../Components/CartDetail/CartDetail';
import Header from '../../Components/Header/Header';

const Cart = ({CartItem,setCartItem}) => {
    return (
        <><Header CartItem={CartItem}setCartItem={setCartItem}/>
            <CartDetail CartItem={CartItem}setCartItem={setCartItem}/>
        </>
    );
};

export default Cart;