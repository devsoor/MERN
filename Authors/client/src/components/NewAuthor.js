import React, { useState } from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';
import { navigate } from '@reach/router';
import AuthorForm from './AuthorForm';

const NewAuthor = (props) => {
    const [author, setAuthor] = useState({
        name: '',
        quote: ''
    });

    const [errors, setErrors] = useState([]); 

    const createAuthor = (author) => {
        const {name, quote} = author;
        axios.post('http://localhost:8000/api/author', {name, quote})
            .then(res => {
                setAuthor(res.data);
                navigate('/');
            })
            .catch(err => {
                console.log("createAuthor: Error: ", err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AuthorForm author={author} onSubmitAuthor={createAuthor} errors={errors} subTitle="Add a new author"/>
            </Col>
        </div>
    )
}

export default NewAuthor