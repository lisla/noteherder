import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="SignIn-div">
      <h1>NoteHerder</h1>
      <div className="SignIn-background">
        <button
          className="SignIn"
          onClick={() => authenticate(githubProvider)}
        >
          Sign In With GitHub
        </button>
        <button
          className="SignIn"
          onClick={() => authenticate(googleProvider)}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  )
}

export default SignIn
