import React from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';

const DeleteProduct = props => {
    const {productId, onDeleteProduct} = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(res => {
            onDeleteProduct();
            })
        .catch(err => {
            console.log("Error getting product. ", err);
        })
    }
    return (
        <Button className="btn-sm btn-danger" onClick={deleteProduct}>Delete</Button>
    )
}

export default DeleteProduct;