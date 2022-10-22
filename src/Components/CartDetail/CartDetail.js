import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";

const CartDetail = ({ CartItem, setCartItem }) => {

    return (
        <Container>
            <Row>
                {CartItem.map((item) => {
                    return <div className='d-flex justify-content-between border-bottom py-1'>
                        <div className="d-flex align-items-center">
                            <img width="45px" src={item.Image} alt="" />
                        </div>
                        <div>
                            <p>{item.Tittle.slice(0, 20)}</p>
                            <p>{item.price}$</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <span>
                                <FaPlusCircle></FaPlusCircle>
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span>
                                <FaTrashAlt></FaTrashAlt>
                            </span>
                        </div>
                    </div>
                })}
            </Row>
            <Row>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p>Shipping Cost:0</p>
                        <p>Vat:0</p>
                        <p>Total:</p>
                    </div>
                </div>
            </Row>

        </Container>

    );
};

export default CartDetail;