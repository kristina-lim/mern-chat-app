import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>Login/Sign Up</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
        <SignupForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}