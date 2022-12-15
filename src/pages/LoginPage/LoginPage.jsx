import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './LoginPage.css';

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
          setError('Log In Failed - Try Again');
        }
      }

  return (
    <>
      <MDBRow>
        <MDBCol md={5} className='login_bg'></MDBCol>
        <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <form onSubmit={handleSubmit} style={{ width: "80%", maxWidth: 500 }}>
            <label>Email:</label>
            <MDBInput className='mb-4' name='email' label='Email address' value={credentials.email} onChange={handleChange} required />
            <label>Password:</label>
            <MDBInput className='mb-4' name='password' label='Password' value={credentials.password} onChange={handleChange} required />
            <MDBBtn type='submit' className='mb-4' block>
              Log in
            </MDBBtn>
            <div className='text-center'>
              <p>
                Don't have an account? <Link to='/signup'>Signup</Link>
              </p>
            </div>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </MDBCol>
      </MDBRow>
    </>
  );
}

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//           <button type="submit">LOG IN</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{error}</p>
//     </div>
//   );
// }
