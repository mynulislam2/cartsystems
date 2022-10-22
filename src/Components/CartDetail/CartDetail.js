import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaTrashAlt, FaRegArrowAltCircleLeft, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { DeleteItem, UpdateCart } from '../../utils/ManageCart';
import AlertTriangle from '../../Assets/modalPopup/alert-triangle.svg'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CartDetail = ({ CartItem, setCartItem }) => {
    const HandleUpdateQuantity = async (Id, updateType) => {
        const StoreAddtoCart = await UpdateCart(Id, updateType)
        setCartItem(StoreAddtoCart)
    }
    const HandleRemoveProduct = (Id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            imageUrl: AlertTriangle,
            imageAlt: 'warning image',
            showCancelButton: true,
            confirmButtonColor: '#00CA84',
            cancelButtonColor: '#FF5858',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const StoreAddtoCart = await DeleteItem(Id)
                setCartItem(StoreAddtoCart)

            }
        })

    }
    const CalculateTotal = () => {
        const TotalPrice = CartItem.reduce(
            //reduce go through the array and cartItem is the each item in the array
            (accumulatedTotal, cartItem) =>
                accumulatedTotal + cartItem.price * cartItem.quantity,
            0 //0 is the start point of accumulatedTotal
        );
        return TotalPrice.toFixed(2)
    }

    return (
        <Container>
            {CartItem.map((item) => {
                return <Row xs={4} sm={4} md={4} lg={4} className='border-bottom py-1 '>
                    <Col className="d-flex align-items-center">
                        <img width="45px" src={item.Image} alt="" />
                    </Col>
                    <Col>
                        <p>{item.Tittle.slice(0, 20)}</p>
                        <p>Price:{item.price}$</p> 
                        <p>Quantity:{item.quantity}</p>
                    </Col>


                    <Col className="d-flex align-items-center ">
                        <span onClick={() => HandleUpdateQuantity(item.Id, "Increase")} style={{ cursor: "pointer", marginRight: "20px" }}>
                            <FaPlusCircle></FaPlusCircle>
                        </span>
                        <span onClick={() => HandleUpdateQuantity(item.Id, "Decrease")} style={{ cursor: "pointer" }}>
                            <FaMinusCircle></FaMinusCircle>
                        </span>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <span onClick={() => HandleRemoveProduct(item.Id)} style={{ cursor: "pointer" }}>
                            <FaTrashAlt></FaTrashAlt>
                        </span>
                    </Col>
                </Row>
            })}
            <Row className='mt-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Link to="/" style={{ color: "black" }}>
                            <span>
                                <FaRegArrowAltCircleLeft fontSize="30px"></FaRegArrowAltCircleLeft>
                            </span>
                        </Link>
                    </div>
                    <div>
                        <p>Shipping Cost:0</p>
                        <p>Vat:0</p>
                        <p>Total:{CalculateTotal()}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button className="bg-dark">
                        Checkcout
                    </Button>
                </div>
            </Row>

        </Container>

    );
};

export default CartDetail;