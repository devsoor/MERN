import React, {useContext} from 'react';
import {Input, Label} from "reactstrap";
import {NavContext} from './Wrapper';

const NBForm = () => {
    const context = useContext(NavContext);

    return (
        <div>
            <Label>Your Name</Label>
            <Input types="text" name={context.data} onChange={context.handleName}/>
        </div>
    );
}

export default NBForm;