import React, { useContext, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegStarHalf, FaRegStar } from "react-icons/fa";
import '../../css/Product/ProductCard.css'
import { AddToCart } from '../../utils/ManageCart';
const ProductCard = ({ setCartItem, Id, price, Image, Tittle, Description, Details }) => {
    const HandleAddToCart = async () => {
        const StoreAddtoCart = await AddToCart(Id, price, Image, Tittle,)
        setCartItem(StoreAddtoCart)
    }




    return (
        <Col className="mt-4">
            <Card style={{ wIdth: "17rem", height: "500px", border: "none" }}>
                <Card.Img wIdth="200px" height="200px" variant="top" src={Image} />
                <Card.Body className="mb-0 pb-0 ">
                    <Card.Title >{Tittle.slice(0, 60)}</Card.Title>
                    <Card.Text>
                        {Description.slice(0, 70)}
                    </Card.Text>
                    <p className="mb-0 pb-0">Price: {price} $</p>
                </Card.Body>
                <Button onClick={() => HandleAddToCart()}>Add to Cart</Button>

            </Card>
        </Col>
    );
};

export default ProductCard;