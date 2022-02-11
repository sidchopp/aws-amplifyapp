import React from 'react';
import './App.css';
import Authentication from './components/Authentication';

function App() {
  return (
    <div className="App">
      <h1>Hello World! </h1>
      <p>This is my first ever AWS deployment. Hurrayy!!</p>
      <h3>We have Authentication in our App.</h3>
      <Authentication />
    </div>
  );
}

export default App;
