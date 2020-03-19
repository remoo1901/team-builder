import React, { useState } from 'react';
import Card from './components/Card'
import Form from './components/Form'

import './App.css';

function App() {
  const [cardState, setCardState] = useState([])
  
const addNewMember =  member => {
   setCardState( [...cardState, member])
}

  return (
    <div className="App">
      <header className="App-header">
     <h1>Team Builder</h1>
    <Form addMember={addNewMember}/>
    <Card cards={cardState}/>
    </header>
    </div>
  );
}

export default App;