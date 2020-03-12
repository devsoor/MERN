import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Label, Input, Row, Col, Card, CardBody, Form, FormGroup, ButtonGroup } from 'reactstrap';

const PollResults = props => {
    const [poll, setPoll] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/poll/' + props.id)
        .then(res => {
            console.log("axios get: res.data = ", res.data)
            setPoll(res.data);
            })
            .catch(err => {
                console.log("Error getting poll. ", err);
            })
    }, [])

    return (
        <div>
            <Card color="info">
                <CardBody>
                    <h1>Voting Dojo</h1>
                </CardBody>
            </Card>        
            <Card>
                <CardBody>
                <p>
                <Button color="primary"><Link to="/" style={{color:'white'}}>Back to Home</Link></Button>
                </p>
                    <p>Thanks for voting! Here are the reuslts</p>
                    <h3>{poll.question}</h3>
                        <Row>
                            <Col sm={4}> 
                            </Col>
                            <Col sm={8}>
                                    {poll.option1 && <Row>
                                            <Col sm={6}>{poll.option1}</Col>
                                            <Col sm={6}>{poll.option1Num}</Col>
                                        </Row>
                                    }
            
                                    {poll.option2 && <Row>
                                            <Col sm={6}>{poll.option2}</Col>
                                            <Col sm={6}>{poll.option2Num}</Col>
                                        </Row>
                                    }
                                    {poll.option3 && <Row>
                                            <Col sm={6}>{poll.option3}</Col>
                                            <Col sm={6}>{poll.option3Num}</Col>
                                        </Row>
                                    }
                                    {poll.option4 && <Row>
                                            <Col sm={6}>{poll.option4}</Col>
                                            <Col sm={6}>{poll.option4Num}</Col>
                                        </Row>
                                    }
                            </Col>
                        </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default PollResults;
