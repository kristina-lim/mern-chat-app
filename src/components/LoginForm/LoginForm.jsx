import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import {
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './LoginForm.css';

export default function LoginPage({ setUser }) {
  const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      });
      const [error, setError] = useState('');
    
      function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
      }
    
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await usersService.login(credentials);
          setUser(user);
        } catch {
          setError('Login Failed - Try Again');
        }
      }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={5} className='login-bg'></MDBCol>
        <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <form autoComplete='off' onSubmit={handleSubmit} style={{ width: "80%", maxWidth: 500 }}>
            <label>Email:</label>
            <MDBInput className='mb-4' type='text' name='email' label='Email Address' value={credentials.email} onChange={handleChange} required />
            <label>Password:</label>
            <MDBInput className='mb-4' type='password' name='password' label='Password' value={credentials.password} onChange={handleChange} required />
            <MDBBtn type='submit' className='mb-4' block>
              Log in
            </MDBBtn>
            <div className='text-center'>
              <p>
                Don't have an account? <Link to='/signup'>Signup</Link>
              </p>
            </div>
          </form>
          <p className='error-message'>&nbsp;{error}</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}