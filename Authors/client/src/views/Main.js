import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Container, Card, CardBody } from 'reactstrap';
import AuthorTable from '../components/AuthorTable';

const Main = (props) => {
    const [authors, setAuthors] = useState({
        name: '',
        quote: ''
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])

    const removeFromDom = delId => {
        setAuthors(authors.filter(author => author._id != delId));
    }

    return (
        <Container maxwidth="sm">
            <Card>
                <CardBody>
                    <h3>Favorite Authors</h3>
                    <Link to="/new">Add an author</Link>
                    <p>We have quotes by:</p>
                    <p>{authors._id}</p>
                    {
                        loaded && <AuthorTable authors={authors} onRemoveAuthor={removeFromDom}/>
                    }
                </CardBody>
            </Card>
        </Container>
    )
}

export default Main;