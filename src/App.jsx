// src/App.js
import React from 'react';
import './App.css';
import CalculationForm from './CalculationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:"center"}}>Mech Project</h1>
      </header>
      <main>
        <CalculationForm />
      </main>
    </div>
  );
}

export default App;
