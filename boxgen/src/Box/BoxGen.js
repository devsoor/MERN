import React, {useState, useEffect} from 'react';
import { Row, Form, Input} from "reactstrap";
import './Box.css';

function BoxGen() {
    const [state, setState] = useState({
        color: null,
        colorList: [],
        submitted: false
    });

    useEffect(() => {
        console.log("useEffect: color list = ", state.colorList);
    });

    const handleChange = e => {
        const { name, value } =  e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        const [...newColor] = state.colorList;
        newColor.push(state.color);
        setState({submitted: true, colorList: newColor, color:''});
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Input type="text" name="color" value={state.color} onChange={handleChange}/>
                    <Input type="submit"/>
                </Row>
            </Form>
            {
                state.colorList.map((c,i) =>
                    <div className="boxcolor" style={{backgroundColor:`${c}`}} key={i}></div>
                )
            }
        </div>
    )
}

export default BoxGen;