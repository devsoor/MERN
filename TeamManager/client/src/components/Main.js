import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Card, CardBody, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Main = (props) => {
    const [players, setPlayers] = useState([]);
    const [modal, setModal] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState({
        name: '',
        position: '',
        status: ''
    });

    const toggle = () => setModal(!modal);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res=>{
                setPlayers(res.data);
            })
            .catch(err=>{
                console.log("Error: ", err);
            })
    }, [])

    const handleDelete = (e, id) => {
        axios.delete('http://localhost:8000/api/player/' + id)
        .then(res => {
            setPlayers(players.filter(player => player._id != id));
            
        })
        .catch(err => {
            console.log("Error deleting product. ", err);
        })
        toggle();
    }

    const openModal = p => {
        setCurrentPlayer(p);
        toggle();
    }

    return (
            <Card>
                <CardBody>
                <p>
                    <Link to="/players/list">List | </Link>
                    <Link to="/players/addplayer">Add Player</Link>
                </p>
                <Table>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player, i) =>
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                <Button color="danger" onClick={()=>openModal(player)}>Delete</Button>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Delete Player</ModalHeader>
                                        <ModalBody>
                                            Are you sure you want to delete player {currentPlayer.name}?
                                        </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={(e)=>handleDelete(e,currentPlayer._id)}>Delete</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                                </td>
                            </tr>  
                            )
                        }                        
                    </tbody>
                </Table>
                </CardBody>
            </Card>
    )
}

export default Main;