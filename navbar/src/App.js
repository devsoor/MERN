import React from 'react';
import './App.css';
import Wrapper from './NavbarHooks/Wrapper';
import NBNavbar from './NavbarHooks/NBNavbar';
import FormWrapper from './NavbarHooks/FormWrapper';

function App() {
  return (
      <Wrapper>
            <NBNavbar/>
            <FormWrapper/>
      </Wrapper>
  );
}

export default App;
