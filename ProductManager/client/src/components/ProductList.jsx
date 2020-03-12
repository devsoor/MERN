import React from 'react';
import { Link, navigate } from '@reach/router';
import { Col, Button } from 'reactstrap';
import axios from 'axios';

const ProductList = (props) => {
    const deleteProduct = (delId) => {
        axios.delete('http://localhost:8000/api/product/' + delId)
        .then(res => {
                props.onRemoveProduct(delId);
            })
        .catch(err => {
            console.log("Error getting product. ", err);
        })
        .finally(navigate('/'))
    }

    return (
        <div>
            {props.products.map((product, i) => {
                return <Col key={i} style={{padding:'10px', margin:'10px'}}>
                            <Link to={'product/' + product._id}>
                                {product.title}
                            </Link>
                            <Button className="btn-sm btn-danger" onClick={(e) => {deleteProduct(product._id)}}>Delete</Button>
                        </Col>
            })}
        </div>
    )
};

export default ProductList;