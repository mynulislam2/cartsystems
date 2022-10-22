import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import { ProductsApi } from '../../Api/ProductsApi';
import ProductCard from '../ProductCard/ProductCard';

const ProductShow = ({setCartItem}) => {
    const [Products, setProducts] = useState([])
    const [Categories, setCategories] = useState([])
    const HandleGetProduct = () => {
        ProductsApi.getProduct()
            .then(function (res) {
                // handle success
                setProducts(res.data.sort((a, b) => a.price - b.price));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    useEffect(() => {
        HandleGetProduct()
        ProductsApi.getCategory()
            .then(function (res) {
                // handle success
                setCategories(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const HandleSpecificCategory = (SelectedCategory) => {
        console.log(SelectedCategory)
        if (SelectedCategory === "all") {
            HandleGetProduct()

        }
        else {
            ProductsApi.SelectedCategory(SelectedCategory)
                .then(function (res) {
                    // handle success
                    console.log(res.data)
                    setProducts(res.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
    const HandlePriceSort = (sortType) => {
        if ("Lowest to Highest" == sortType) {
            const TempArray = [...Products];

            setProducts(TempArray.sort((a, b) => a.price - b.price))
        }
        if ("Highest to Lowest" == sortType) {
            const TempArray = [...Products];
            setProducts(TempArray.sort((a, b) => a.price - b.price).reverse())
        }
    }


    
    return (
        <Container>
            <div className="d-flex justify-content-end">
                <div className='d-flex justify-content-between'>
                    <div>
                        <Form.Select aria-label="Default select example" onChange={(e) => HandleSpecificCategory(e.target.value)}>
                            <option>all</option>
                            {Categories.map((category, id) => <option key={id} >{category}</option>)}
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select aria-label="Default select example" onChange={(e) => HandlePriceSort(e.target.value)}>
                            <option >Lowest to Highest</option>
                            <option > Highest to Lowest</option>
                        </Form.Select>
                    </div>
                </div>
            </div>

            <Row xs={1} sm={1} md={2} lg={3} xl={4} >
                {
                    Products.map((product) => {
                        return <ProductCard key={product.id} setCartItem={setCartItem} Id={product.id} Image={product.image} Tittle={product.title} Description={product.description} price={product.price}></ProductCard>
                    })
                }
            </Row>
        </Container>
    );
};

export default ProductShow;