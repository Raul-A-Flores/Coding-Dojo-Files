import PersonaCard from './components/PersonaCard';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <PersonaCard firstName = {"Raul"}></PersonaCard>
      <PersonaCard lastName = {"Flores"}></PersonaCard>
      <PersonaCard age = {29}></PersonaCard>
      <PersonaCard hairColor = {"Black"}></PersonaCard>
      <hr/>


      
    </div>
  );
}

export default App;
