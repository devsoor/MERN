import React, {useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Label, Input, Row, Col, Card, CardBody, Form, FormGroup } from 'reactstrap';

const PollNew = props => {;
    const [poll, setPoll] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option1Num: 0,
        option2Num: 0,
        option3Num: 0,
        option4Num: 0
    });
    const [errors, setErrors] = useState([]); 


    const handleChange = e => {
        console.log("handleChange: e value = ", e.target.value)
        setPoll({...poll, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("handleSubmit: poll = ", poll)
        const {question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num} = poll;
        axios.post('http://localhost:8000/api/poll', {question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num})
            .then(res => {
                console.log("axios post: res.data = ", res.data)
                setPoll(res.data)
                navigate('/');
            })
            .catch(err => {
                console.log("axios post: Catch = ", err)
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
                <Button color="primary"><Link to="/" style={{color:'white'}}>Back to Home</Link></Button>
                </p>
                <Card>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                        {
                            errors && errors.map((err, index) => 
                                <p key={index}>{err}</p>
                            )
                        }
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label for="question">Question</Label>
                                        <Input type="textarea" name="question" id="question" onChange={handleChange}/>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label for="option1">Option 1<span style={{color:'red'}}>*</span></Label>
                                        <Input type="text" name="option1" id="option1" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="option2">Option 2<span style={{color:'red'}}>*</span></Label>
                                        <Input type="text" name="option2" id="option2" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="option3">Option 3</Label>
                                        <Input type="text" name="option3" id="option3" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="option4">Option 4</Label>
                                        <Input type="text" name="option4" id="option4" onChange={handleChange}/>
                                    </FormGroup>

                                </Col>
                            </Row>
                            <Col  className="text-left">
                                <Button color="primary" type="submit">Submit Poll</Button>
                                <p><span style={{color:'red'}}>* Indicates a required field</span></p>
                            </Col>
                        </Form>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>    
    )

}

export default  PollNew;