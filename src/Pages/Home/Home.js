import React, { createContext, useState } from 'react';
import Header from '../../Components/Header/Header';
import ProductShow from '../../Components/ProductShow/ProductShow';

const Home = ({CartItem,setCartItem}) => {



    return (<>
        <Header CartItem={CartItem}/>
        <ProductShow setCartItem={setCartItem}/>
    </>



    );
};

export default Home;