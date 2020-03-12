import React from 'react';
import './App.css';
import Tabs from './Tabs/Tabs';

function App() {
  const items = [
    {
      label: "Tab 1",
      content: "Tab 1 content shows here"
    },
    {
      label: "Tab 2",
      content: "Tab 2 content shows here"
    },
    {
      label: "Tab 3",
      content: "Tab 3 content shows here"
    },
  ]
  return (
    <div className="App">
      <Tabs items={items}/>
    </div>
  );
}

export default App;
