import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Label, Input, Row, Col, Card, CardBody, Form, FormGroup, ButtonGroup } from 'reactstrap';

const PollShow = props => {
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

    const [option1Number, setOption1Number] = useState();
    const [option2Number, setOption2Number] = useState();
    const [option3Number, setOption3Number] = useState();
    const [option4Number, setOption4Number] = useState();
    const [loaded, setLoaded] = useState(false);

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

    const handleClick = (e) => {
        console.log("handlChange: e.target name = ", e.target.name)
        console.log("handlChange: poll option1Num = ", poll.option1Num)
        console.log("handlChange: poll option2Num = ", poll.option2Num)

        if (e.target.name == "option1Number") {
            poll.option1Num++;
        }
        if (e.target.name == "option2Number") {
            poll.option2Num++;
        }
        if (e.target.name == "option3Number") {
            poll.option3Num++;
        }
        if (e.target.name == "option4Number") {
            poll.option4Num++;
        }
        setPoll({...poll})
        const {question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num} = poll;
        axios.put('http://localhost:8000/api/poll/' + props.id, {question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num})
            .then(res => {
                console.log("axios get: res.data = ", res.data)
                setPoll(res.data);
                navigate('/polls/results/' + props.id)
            })
            .catch(err => {
                console.log("Error getting poll. ", err);
            })
    }

    return (
        <div>
            <Card color="info">
                <CardBody>
                    <h1>Voting Dojo</h1>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row><h3>{poll.question}</h3></Row>
                    <Form>
                        <Row>
                            {poll.option1 &&
                                <Card>
                                    <CardBody className="text-center">
                                        <h5>{poll.option1}</h5>
                                        <Button color="warning" name="option1Number" onClick={handleClick}>Vote {poll.option1}</Button>
                                        {/* <Input type="radio" name="option1Num" onChange={handleChange}></Input> */}
                                    </CardBody>
                                </Card>
                            }   
                            {poll.option2 &&
                                <Card>
                                    <CardBody>
                                        <h5>{poll.option2}</h5>
                                    <Button color="danger" name="option2Number"  onClick={handleClick}>Vote {poll.option2}</Button>
                                        {/* <Input type="radio" name="option2Num" onChange={handleChange}></Input> */}
                                    </CardBody>
                                </Card>
                            }   
                            {poll.option3 &&
                                <Card>
                                    <CardBody>
                                        <h5>{poll.option3}</h5>
                                        <Button color="info" name="option3Number" onClick={handleClick}>Vote {poll.option3}</Button>
                                    </CardBody>
                                </Card>
                            }   
                            {poll.option4 &&
                                <Card>
                                    <CardBody>
                                        <h5>{poll.option4}</h5>
                                        <Button color="success" name="option4Number" onClick={handleClick}>Vote {poll.option4}</Button>
                                    </CardBody>
                                </Card>
                            }   
                        </Row>
                    </Form>
                    <Row>

                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default  PollShow;
