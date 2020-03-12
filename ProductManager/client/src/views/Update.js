import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, Input, Label, CardTitle, FormGroup, CardBody, Button} from 'reactstrap';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteProduct from '../components/DeleteProduct';

const Update = (props) => {
    const [products, setProducts] = useState({
        title: '',
        price: '',
        description: ''
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
        .then(res => {
            setProducts(res.data);
            setLoaded(true);
            })
            .catch(err => {
                console.log("Error getting product. ", err);
                setLoaded(false);
            })
    }, [])

    const updateProduct = (prod) => {
        const {title, price, description} = prod;
        axios.put('http://localhost:8000/api/product/'+ props.id, {title, price, description})
            .then(res=>console.log("Response: ",res))
            .catch(err=>console.log("Error: ", err))
    }   

    return (
        <Container>
            <CardBody>
                {
                    loaded && <div>
                        <ProductForm onSubmitProduct={updateProduct} products={products} formLabel="Update"/>
                        <DeleteProduct productId={props.id} onDeleteProduct={() => navigate('/')}/>
                    </div>
                }
            </CardBody>
        </Container>
    )

}

export default Update;