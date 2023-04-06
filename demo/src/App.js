import flower from './flower.png';
import logo from './logo.svg';
import './styles/css/App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <img src={flower} className="App-flower" id="flower1" alt="flower" />
      <img src={flower} className="App-flower" id="flower2" alt="flower" />
      <header className="App-header">
        <h1>Welcome to React, girliess!</h1>
        <img src={logo} className="App-logo"  alt="logo" />
      </header>
      <h2>Asta e un mic tutorial I guess, hoppefully it helps you a bit, e din ce mai stiu si eu, sper sa invatam mai multe impreuna</h2>
    </div>
  );
}

export default App;
