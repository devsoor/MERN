import React, {useState, useEffect} from 'react';
import { Row, Col, Form, Input} from "reactstrap";
import './Box.css';

function BoxGenWH() {
    const [state, setState] = useState({
        color: null,
        width: 0,
        height: 0,
        boxList: [],
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
        const boxInfo = {};
        boxInfo["color"] = state.color;
        boxInfo["width"] = state.width;
        boxInfo["height"] = state.height;
        const [...newBox] = state.boxList;
        newBox.push(boxInfo);
        setState({submitted: true, boxList: newBox, color:''});
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row><Input type="text" name="color" value={state.color} onChange={handleChange}/></Row>
                <Row><Input type="text" name="width" value={state.width} onChange={handleChange}/></Row>
                <Row><Input type="text" name="height" value={state.height} onChange={handleChange}/></Row>
                <Row><Input type="submit"/></Row>
            </Form>
            {
                state.boxList.map((box,i) => 
                    <div className="boxcolor" style={{backgroundColor:`${box.color}`, width:`${box.width}`+ 'px', height:`${box.height}` + 'px'}} key={i}></div>
                )
            }
        </div>
    )
}

export default BoxGenWH;