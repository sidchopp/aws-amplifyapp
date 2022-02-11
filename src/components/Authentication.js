import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Authentication() {
  return (
    <div>
      <h1> Authentication is working, if you are seeing this message.</h1>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Authentication);