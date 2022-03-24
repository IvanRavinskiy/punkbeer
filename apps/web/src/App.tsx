import React from 'react';
import logo from './logo.svg';
import './App.css';
import { greeting } from '@iwann/greeting'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting()}
      </header>
    </div>
  );
}

export default App;
