import React, { useState } from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { IoMdCart } from "react-icons/io";
import { GetCart } from '../../utils/ManageCart';
import '../../css/Header.css'
import { Link } from 'react-router-dom';
const Header = ({ CartItem }) => {
    const [ShowCart, setShowCart] = useState(false);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" className="mb-4">
                <Container>
                    <Navbar.Brand className="text-white">Amaxon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className="fs-5 text-white">Login</Nav.Link>
                            <Nav.Link onClick={() => setShowCart(!ShowCart)} className="CartImage">
                                <IoMdCart color="white" fontSize="25px"></IoMdCart>
                                <span style={{ color: 'white' }}>
                                    {
                                        CartItem.length
                                    }
                                </span>
                            </Nav.Link>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {ShowCart && <div className="CartsShow w-25 rounded">
                {CartItem.map((item) => {
                    return <div className='px-3 py-2 bg-white d-flex gap-5 border-bottom'>
                        <img width="50px" src={item.Image} alt="" />
                        <p>
                            {item.Tittle.slice(0, 20)}
                        </p>
                    </div>
                })}
               <Link to="/cart"> <Button className="w-100" >Show More</Button></Link> 
            </div>}

        </div>

    );
};

export default Header;