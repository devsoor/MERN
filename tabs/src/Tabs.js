import React, {useState} from 'react';
import {Row, Col, Button} from 'reactstrap';

const Tabs = props => {
    const [state, setState] = useState({
        label: null,
        content: null
    });

    const items = props.items;

    const handleClick = (e, item) => {
        setState({content: item.content})
    }

    return (
        <div>
            <Row>
                {
                    items.map((item,i) => 
                        <Button className="bg-success" onClick={(e) => handleClick(e,item)}>{item.label}</Button>                 
                    )
                }
            </Row>
            <Col sm="12">
                {state.content}
            </Col>
        </div>
    );
};

export default Tabs