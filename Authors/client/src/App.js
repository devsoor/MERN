import React from 'react';
import Main from './views/Main';
import NewAuthor from './components/NewAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import { Router } from '@reach/router';import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
