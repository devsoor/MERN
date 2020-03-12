import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, Row, Col, Table, Button} from 'reactstrap';
import { Link } from '@reach/router';

const StatusGame = props => {
    const statusColor = {
        'Playing': "green",
        'Not playing': 'red',
        'Undecided': 'yellow'
    }

    // const [players, setPlayers] = useState([{
    //     name: '',
    //     position: '',
    //     status: ''
    // }]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res=>{
                setPlayers(res.data);
            })
            .catch(err=>{
                console.log("Error: ", err);
            })
    }, [])

    const handleColor = (e,id, newStatus) => {
        players.map(item => {
            if (item._id == id) {
                item.status = newStatus;
            }
        })
        setPlayers([...players])

        const thisPlayer = players.filter(p => p._id == id)[0];
        const {name, position, status} = thisPlayer;
        axios.put('http://localhost:8000/api/player/'+id, {name, position, status})
            .then(res=>{
                console.log("handleColor: res.data = ", res.data)
            })
            .catch(err=>{
                console.log("Error: ", err);
            })  
    }

    return (
        <Card className="text-center">
            <h3>Player Status - Game {props.id}</h3>
            <CardBody>
                <Row className="text-center">
                    <Col sm={4}><Link to="/status/game/1">Game 1</Link></Col>
                    <Col sm={4}><Link to="/status/game/2">Game 2</Link></Col>
                    <Col sm={4}><Link to="/status/game/3">Game 3</Link></Col>
                </Row>
                <Table>
                    <thead>
                        <tr>
                            <th style={{maxWidth:'200px'}}>Team Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            players.map((player, i) =>
                            <tr key={i}>
                                <td>{player.name}</td>
                                    {
                                       Object.entries(statusColor).map(([k, v], index) =>
                                        <td key={index}>
                                            {
                                                (k==player.status) ? <Button onClick={(e)=>handleColor(e,player._id,k)} style={{color:"black", backgroundColor:statusColor[player.status]}}>{k}</Button> :
                                                <Button onClick={(e)=>handleColor(e,player._id,k)} style={{color:"black", backgroundColor:'white'}}>{k}</Button>
                                            }
                                        </td>
                                       )
                                    }
                            </tr>  
                            )
                        } 
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
    
}

export default StatusGame;