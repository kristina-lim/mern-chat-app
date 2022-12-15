import React from 'react';
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SignupPage({ setUser }) {
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
        <MDBCol md={5} className='signup_bg'></MDBCol>
        <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <form onSubmit={handleSubmit} style={{ width: "80%", maxWidth: 500 }}>
            <h5>Email:</h5>
            <MDBInput className='mb-4' type='email' label='Email address' value={credentials.email} onChange={handleChange} required />
            <h5>Password:</h5>
            <MDBInput className='mb-4' type='password' label='Password' value={credentials.password} onChange={handleChange} required />
            <MDBBtn type='submit' className='mb-4' block>
              Log in
            </MDBBtn>
            <div className='text-center'>
              <p className='text-center'>
                Don't have an account? <a href='/signup'>Signup</a>
              </p>
            </div>
          </form>
          <p className="error-message">&nbsp;{error}</p>
        </MDBCol>
      </MDBRow>
    </>
  );
}

// import { Component } from 'react';
// import { signUp } from '../../utilities/users-service';

// export default class SignUpForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   };

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: '' 
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const {name, email, password} = this.state;
//       const formData = {name, email, password};
//       // The promise returned by the sign/Up service
//       // method will resolve to the user object includes
//       // in the payload of the JSON Web Token (JWT)
//       const user = await signUp(formData);
//       this.props.setUser(user);
//     } catch {
//       // An error occurred probably due to 
//       // a duplicate email
//       this.setState({ error: 'Sign Up Failed - Try Again' });
//     }
//   };

//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Name</label>
//             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//             <label>Email</label>
//             <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//             <label>Password</label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//             <label>Confirm</label>
//             <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <button type="submit" disabled={disable}>SIGN UP</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }
// }