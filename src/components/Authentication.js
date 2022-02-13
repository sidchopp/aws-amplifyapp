import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Heading } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../App.css'

//Components
import Api from './Api';

function Authentication() {
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <main className="right">
          <Heading level={4}>
            Hello {' '}{user.username}
          </Heading>
          <Button size="small" onClick={signOut}>Sign out</Button>
          <Api />
        </main>
      )}
    </Authenticator>
  )
}

export default Authentication