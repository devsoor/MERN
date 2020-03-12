import React, {useState, createContext} from 'react';

export const NavContext = createContext();

const Wrapper = (props) => {
    const [state, setState] = useState({
        name: null
    });

    const handleName = (e) => {
        setState({...state, name: e.target.value});
    }


    return (
        <NavContext.Provider
            value={{
                data: state.name,
                handleName: handleName
            }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default Wrapper;