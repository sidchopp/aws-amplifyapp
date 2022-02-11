import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World! </h1>
        <p>This is my first AWS deployment. Hurrayy!!</p>
        <h1> Authentication is working, if you are seeing this message.</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
