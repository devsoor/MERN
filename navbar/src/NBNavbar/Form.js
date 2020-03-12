import React, {useContext} from 'react';
import {Input, Label} from "reactstrap";
import {NavContext} from './Wrapper';

const NBForm = () => {

    return (
        <NavContext.Consumer>
            {context => (
                <div>
                    <Label>Your Name</Label>
                    <Input types="text" name={context.data} onChange={context.handleName}/>
                </div>
            )}
        </NavContext.Consumer>
    );
}

export default NBForm;