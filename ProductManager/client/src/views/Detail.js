import React, {useState, useEffect} from 'react';
import {Jumbotron, Row, Col, Button} from 'reactstrap';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteProduct from '../components/DeleteProduct';


const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
                setProduct({...res.data});
            })
    }, [])
    return (
        <div>
            <Jumbotron>
                <h3 className="display-3">{product.title}</h3>
                <p className="lead">Price: {product.price}</p>
                <p className="lead">Description: {product.description}</p>
            <Row>
                <Col>
                    <Link to={"/product/" + props.id + "/edit"}>
                        Edit
                    </Link>
                </Col>
                <Col>
                    <DeleteProduct productId={props.id} onDeleteProduct={() => navigate('/')}/>
                </Col>
            </Row>
            </Jumbotron>
        </div>
    )
}

export default Detail;