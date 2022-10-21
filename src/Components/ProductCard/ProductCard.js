import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegStarHalf,FaRegStar } from "react-icons/fa";
import '../../css/Product/ProductCard.css'
const ProductCard = ({ Id, price, Image, Tittle, Description, Details }) => {





    return (
        <Col className="mt-4">
            <Card style={{ width: "17rem", height: "500px",border:"none" }}>
                <Card.Img width="200px" height="200px" variant="top" src={Image} />
                <Card.Body className="mb-0 pb-0 ">
                    <Card.Title >{Tittle.slice(0, 60)}</Card.Title>
                    <Card.Text>
                        {Description.slice(0, 70)}
                    </Card.Text>
                    <p className="mb-0 pb-0">Price: {price} $</p>
                </Card.Body>
                <Button>Add to Cart</Button>

            </Card>
        </Col>
    );
};

export default ProductCard;