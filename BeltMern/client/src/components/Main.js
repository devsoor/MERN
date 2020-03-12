import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Card, CardBody, CardTitle, Button, Row, Col} from 'reactstrap';

function daysFromToday(date) {
    const today = new Date();
    const firstDate = new Date(date);
  
    var res = Math.abs(today - firstDate) / 1000;
    var minutes = Math.floor(res / 1440);
    return minutes;
}


const Main = (props) => {
    const [polls, setPolls] = useState([]);
    const [top3Polls, setTop3Polls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/poll')
            .then(res=>{
                let sortedPoll = res.data.slice().sort((a,b) => {return new Date(b.createdAt) - new Date(a.createdAt)});

                sortedPoll.map((d) => {
                    d["numDays"]=daysFromToday(d.createdAt);
                    const totalVotes = d.option1Num + d.option2Num + d.option3Num + d.option4Num;
                    d["totalVotes"] = totalVotes;
                })
                setPolls(sortedPoll);

                let sortedByVotes = res.data.slice().sort((a,b) => a.totalVotes - b.totalVotes);
                const top3 = sortedByVotes.slice(2).sort((a,b) => b.totalVotes - a.totalVotes);
                setTop3Polls(top3);

            })
            .catch(err=>{
                console.log("Error: ", err);
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
                <Row>
                    <Button color="primary"><Link to="/polls/new" style={{color:'white'}}>Create your new Poll</Link></Button>
                </Row>
                </CardBody>
            </Card>

            <Row>
                <Col sm={7}>
                    <Card color="secondary">
                        <CardBody>
                            <h3 style={{color:'white'}}>Top 3 Polls</h3>
                                {top3Polls.map((poll, i) => (
                                    <Col key={i}>
                                        <Card>
                                            <CardBody>
                                                <Row><Link to={"/polls/" + poll._id}>{poll.question}</Link></Row>
                                                <Row>
                                                    {
                                                        poll.option1 &&
                                                        <Col><small>{poll.option1}: {poll.option1Num} votes</small></Col>
                                                    }
                                                    {
                                                        poll.option2 &&
                                                        <Col><small>{poll.option2}: {poll.option2Num} votes</small></Col>
                                                    }
                                                    {
                                                        poll.option3 &&
                                                        <Col><small>{poll.option3}: {poll.option3Num} votes</small></Col>
                                                    }
                                                    {
                                                        poll.option4 &&
                                                        <Col><small>{poll.option4}: {poll.option4Num} votes</small></Col>
                                                    }
                                                </Row>
                                                <Row>({poll.numDays} minutes ago), Total votes: {poll.totalVotes}</Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={5}>
                    <Card>
                        <CardBody>
                            <h3>Recent Polls</h3>
                            <Card>
                                <CardBody>
                                    {polls.map((poll, i) => {
                                        return <Col key={i}>
                                            <Row><Link to={"/polls/" + poll._id}>{poll.question}</Link></Row>
                                            <Row>({poll.numDays} minutes ago)</Row>
                                        </Col>
                                    })}
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Main;
