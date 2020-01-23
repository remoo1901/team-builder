import React, { useState } from 'react';
import Card from './components/Card'
import Form from './components/Form'

import './App.css';

function App() {
  const [member, setMember] = useState([])

  const addNewMember = ((mem) => {
    const addNewM = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role
    }
    setMember([...member, addNewM]);

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Form  addNewMember={addNewMember}/>
      </header>
    </div>
  );
}

export default App;
