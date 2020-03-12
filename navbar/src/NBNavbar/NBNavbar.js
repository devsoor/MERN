import React, {useContext} from 'react';
import {Row, Card} from "reactstrap";
import {NavContext} from './Wrapper';

const NBNavbar = () => {
    return (
        <NavContext.Consumer>
            {context => (
                <Row className="text-right" style={{width:'800px', height:'100px', backgroundColor:'blue', color:'white', fontSize: '150%'}}>
                    {context.data}
                </Row>
            )}
        </NavContext.Consumer>
    );
}

export default NBNavbar;