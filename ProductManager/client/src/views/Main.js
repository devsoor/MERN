import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])

    const createProduct = (prod) => {
        const {title, price, description} = prod;
        axios.post('http://localhost:8000/api/product', {title, price, description})
            .then(res=> {
                setProducts([...products, res.data]);
            })
            .catch(err=>console.log("Error creating product: ", err))
    }

    const removeFromDom = delId => {
        setProducts(products.filter(product => product._id != delId));
    }

    return (
        <div>
            <ProductForm onSubmitProduct={createProduct} products={products} formLabel="Create"/>
            <h1>All Products:</h1>
            {
                loaded && <ProductList products={products} onRemoveProduct={removeFromDom}/>
            }
        </div>
    )
}