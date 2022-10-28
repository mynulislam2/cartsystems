import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaTrashAlt, FaRegArrowAltCircleLeft, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { DeleteItem, UpdateCart } from '../../utils/ManageCart';
import AlertTriangle from '../../Assets/modalPopup/alert-triangle.svg'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CartDetail = ({ CartItem, setCartItem }) => {
    const HandleUpdateQuantity = async (Id, updateType, minimumQuantity) => {
        console.log(CartItem)
        const StoreAddtoCart = await UpdateCart(Id, updateType, minimumQuantity)
        setCartItem(StoreAddtoCart)
    }
    const HandleRemoveProduct = async (Id) => {
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


                        <div className="d-flex align-items-center ">
                            <span onClick={() => HandleUpdateQuantity(item.Id, "Increase")} style={{ cursor: "pointer", marginRight: "20px" }}>
                                <FaPlusCircle></FaPlusCircle>
                            </span>
                            <span style={{ cursor: "pointer", marginRight: "20px" }}>{item.quantity}</span>
                            <span onClick={() => HandleUpdateQuantity(item.Id, "Decrease", item.minimumQuantity)} style={{ cursor: "pointer" }}>
                                <FaMinusCircle></FaMinusCircle>
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span onClick={() => HandleRemoveProduct(item.Id)} style={{ cursor: "pointer" }}>
                                <FaTrashAlt></FaTrashAlt>
                            </span>
                        </div>
                    </div>
                })}
            </Row>
            <Row className='mt-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Link to="/">
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
            </Row>

        </Container>

    );
};

export default CartDetail;