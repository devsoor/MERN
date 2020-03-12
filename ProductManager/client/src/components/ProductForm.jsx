import React, {useState} from 'react';
import {Container, Row, Col, Form, Input, Label, CardTitle, FormGroup, CardBody, Button} from 'reactstrap';
import { Link } from '@reach/router';

const ProductForm = (props) => {
    const {products, onSubmitProduct, formLabel } = props;
    console.log("ProductForm: products.title    ",products.title)
    const [state, setState] = useState({
        title: products.title,
        price: products.price,
        description: products.description
    });

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProduct(state);
    }

    return (
        <Container>
            <CardBody>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form className="form-horizontal" onSubmit={handleSubmit}>
                            <CardTitle className="bg-info border-bottom p-3 mb-0 text-white">Product Manager</CardTitle>
                            <FormGroup row>
                                    <Label for="title">Title:</Label> 
                                    <Input type="text" id="title" name="title" value={state.title} onChange={handleChange}/>
                            </FormGroup>
                            <FormGroup row>
                                    <Label for="price">Price: </Label> 
                                    <Input type="number" id="price" name="price" value={state.price} onChange={handleChange}/>
                            </FormGroup >
                            <FormGroup row>
                                    <Label for="description">Description: </Label> 
                                    <Input type="text" id="description" name="description" value={state.description} onChange={handleChange}/>
                            </FormGroup>
                            <Button type="submit" color="primary">{formLabel}</Button>
                        </Form>
                    </Col>
                <Link to="/">Home</Link>
                </Row>
            </CardBody>
        </Container>
    );
};

export default ProductForm;