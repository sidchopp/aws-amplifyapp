import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Heading, Button, Text, View, Image, useTheme, Link } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../App.css'

//Components
import Api from './Api';

// For Authentication UI
const components = {

  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral['80']}`}>
          &copy;2022, All Rights Reserved.{' '}
          <Link color="orange" fontWeight="bold" href="https://sid-projects.netlify.app/" target="_blank">
            My Other Projects
          </Link>
        </Text>
      </View>
    );
  },
};

function Authentication() {
  return (
    <Authenticator components={components} loginMechanisms={['username']}>
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

export default Authentication;