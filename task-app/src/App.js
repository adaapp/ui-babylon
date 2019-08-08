import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Task content="cool" />
      <Task content="working" />
      <Task content="" />
    </div>
  );
}

export default App;
