import React from 'react';
import { Router, Redirect } from '@reach/router';import './App.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import StatusGame from './components/StatusGame'
import AddPlayer from './components/AddPlayer'
import { Container } from 'reactstrap';


const BASE_PATH = '/players/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Container maxwidth="sm">
        <Router>
          <Main path="/players/list"/>
          <StatusGame path="/status/game/:id"/>
          <AddPlayer path="/players/addplayer"/>
        </Router>
        <Redirect from="/" to={`${BASE_PATH}`} noThrow />
        </Container>
      </header>
    </div>
  );
}

export default App;
