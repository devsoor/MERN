import React, {useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Label, Input, Row, Col, Card, CardBody, Form, FormGroup } from 'reactstrap';

const AddPlayer = props => {
    const [player, setPlayer] = useState({
        name: '',
        position: '',
        status: 'Undecided'
    });
    const [errors, setErrors] = useState([]); 

    const handleChange = e => {
        setPlayer({...player, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        // setPlayer({...player, status: "Not Playing"});
        const {name, position, status} = player;
        console.log("AddPlayer: handleSubmit, player = ", player)
        axios.post('http://localhost:8000/api/player', {name, position, status})
            .then(res => {
                console.log("axios post: res.data = ", res.data)
                setPlayer(res.data)
                navigate('/players/list');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <Card>
            <CardBody>
                <p>
                    <Link to="/players/list">List | </Link>
                    <Link to="/players/addplayer">Add Player</Link>
                </p>
                <Card>
                    <CardBody>
                        <h4>Add Player</h4>
                        <Col sm="12">
                            <Form onSubmit={handleSubmit}>
                                {
                                    errors && errors.map((err, index) => 
                                        <p key={index}>{err}</p>
                                    )
                                }
                                <FormGroup>
                                    <Row>
                                        <Col sm={3}><Label>Player Name</Label></Col>
                                        <Col sm={8}><Input type="text" name="name" onChange={handleChange}/></Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={3}><Label>Preferred Position</Label></Col>
                                        <Col sm={8}><Input type="text" name="position" onChange={handleChange}/></Col>
                                    </Row>
                                </FormGroup>
                                <Button color="primary" onClick={()=>navigate('/players/list')}>Cancel</Button>{' '}
                                <Button color="primary" type="submit">Add</Button>
                            </Form>
                        </Col>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>    
    )
    
}

export default AddPlayer;