import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Form, FormGroup, Input, Label, Row, Col, Button } from 'reactstrap';

const AuthorForm = (props) => {
    const {author, onSubmitAuthor } = props;

    const [state, setState] = useState({
        name: author.name,
        quote: author.quote
    });
    
    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitAuthor(state);
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>{props.subTitle}:</p>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form onSubmit={handleSubmit}>
                    {
                        props.errors && props.errors.map((err, index) => 
                            <p key={index}>{err}</p>
                        )
                    }
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" value={state.name} onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="quote">Quote</Label>
                        <Input type="text" name="quote" value={state.quote} onChange={handleChange}/>
                    </FormGroup>
                    <Button color="primary" onClick={()=>navigate('/')}>Cancel</Button>{' '}
                    <Button color="primary" type="submit">Submit</Button>
                </Form>
            </Col>
        </div>
    )
}

export default AuthorForm