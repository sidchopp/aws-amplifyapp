import React from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
      <h3>This is my first ever AWS deployment. Hurrayy!!!</h3>
      <Authenticator loginMechanisms={['username']}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}
              <span>  <button onClick={signOut}>Sign out</button></span>
            </h1>
            <Api />
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
