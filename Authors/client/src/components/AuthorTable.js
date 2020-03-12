import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from '@reach/router';
import axios from 'axios';

const AuthorTable = props => {
    const handleDelete = (e, id) => {
        axios.delete('http://localhost:8000/api/author/' + id)
        .then(res => {
            props.onRemoveAuthor(id);
        })
        .catch(err => {
            console.log("Error deleting product. ", err);
        })
        
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.authors.map((author, i) =>
                    <tr key={i}>
                        <td>{author.name}</td>
                        <td>
                            <Button color="primary"><Link style={{color:'white'}} key={i} to={"/edit/" + author._id}>Edit</Link></Button>{' '}
                            <Button color="primary" onClick={(e)=>{handleDelete(e,author._id)}}>Delete</Button>
                        </td>
                    </tr>  
                    )
                }

            </tbody>
        </Table>
    )
}
export default AuthorTable;