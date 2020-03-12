import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';
import AuthorForm from './AuthorForm';
import { navigate } from '@reach/router';

const UpdateAuthor = (props) => {
    const [author, setAuthor] = useState({
        name: '',
        quote: ''
    });
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + props.id)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
            })
            .catch(err => {
                setLoaded(false);
            })
    }, [])

    const editAuthor = (author) => {
        console.log("editAuthor: author = ", author)
        const {name, quote} = author;
        axios.put('http://localhost:8000/api/author/' + props.id, {name, quote})
            .then(res => {
                setAuthor(res.data);
                navigate('/');
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);          
            })
        setLoaded(true);
    }
    return (
        <div>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                {loaded && <AuthorForm author={author} onSubmitAuthor={editAuthor} errors={errors} subTitle="Edit this author"/>}
            </Col>
        </div>
    )
}

export default UpdateAuthor