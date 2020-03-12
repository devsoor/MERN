import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './components/Main'
import { Container } from 'reactstrap';
import PollNew from './components/PollNew';
import PollShow from './components/PollShow';
import PollResults from './components/PollResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxwidth="sm">
        <Router>
            <Main path="/"/>
            <PollNew path="/polls/new"/>
            <PollShow path="/polls/:id"/>
            <PollResults path="/polls/results/:id"/>
        </Router>
        </Container>
      </header>
    </div>
  );
}

export default App;
