import React from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <Authenticator loginMechanisms={['username']}>
        {({ signOut, user }) => (
          <main>
            <h3>This is my first ever AWS deployment. Hurrayy!!!</h3>
            <h1>Hello {user.username}</h1>
            <p> Authentication is working, if you are seeing this message.</p>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
