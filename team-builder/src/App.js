import React, { useState } from 'react';
import Card from './components/Card'
import Form from './components/Form'

import './App.css';

function App() {
  const [members, setMember] = useState([])

  const addNewMember = ((mem) => {
    setMember([...members, mem]);
  })

  return (
    <div className="App">
      <header className="App-header">
        <Card members={members} />
        <Form  addNewMember={addNewMember}/>
      </header>
    </div>
  );
}

export default App;
