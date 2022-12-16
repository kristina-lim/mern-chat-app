import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './SignupForm.css';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '' 
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the sign/Up service
      // method will resolve to the user object includes
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred probably due to 
      // a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };
  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
            <form autoComplete='off' onSubmit={this.handleSubmit} style={{ width: "80%", maxWidth: 500 }}>
                <h1 className='text-center'>Create Account</h1>
                <br></br>
                <MDBInput className='mb-4' type='text' name='name' label='Name' value={this.state.name} onChange={this.handleChange} required />
                <br></br>
                <MDBInput className='mb-4' type='text' name='email' label='Email Address' value={this.state.email} onChange={this.handleChange} required />
                <br></br>
                <MDBInput className='mb-4' type='password' name='password' label='Password' value={this.state.password} onChange={this.handleChange} required />
                <br></br>
                <MDBInput className='mb-4' type='password' name='confirm' label='Confirm Password' value={this.state.confirm} onChange={this.handleChange} required />
              <MDBBtn type='submit' className='mb-4' block disabled={disable}>
                Signup
              </MDBBtn>
              <div className='text-center'>
                <p>
                  Already have an account? <Link to='/login'>Login</Link>
                </p>
              </div>
            </form>
            <p className='error-message'>&nbsp;{this.state.error}</p>
          </MDBCol>
          <MDBCol md={5} className='signup-bg'></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}