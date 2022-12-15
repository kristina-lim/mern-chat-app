import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import {
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import botImg from '../../imgs/bot.jpeg';
import './SignupPage.css';

export default function SignupPage({ setUser }) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });
  const [img, setImg] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState('');
  
  function validateImg(evt) {
    const file = evt.target.files[0];
    if (file.size > 1048576) {
      return alert('Max file size is 1MB');
    } else {
      setImg(file);
      setImgPreview(URL.createObjectURL(file));
    }
  }
  
  async function uploadImg() {
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'ml_default');
    try {
      setUploadingImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/dupumqibn/image/upload', {
        method: 'POST',
        body: data
      });
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch(error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
    
  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!img) return alert('Please upload your profile picture');
    const url = await uploadImg(img);
    console.log(url);
    // try {
    //   const user = await usersService.login(credentials);
    //   setUser(user);
    // } catch {
    //   setError('Signup Failed - Try Again');
    // }
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <form autoComplete='off' onSubmit={handleSubmit} style={{ width: "80%", maxWidth: 500 }}>
              <h1 className='text-center'>Create Account</h1>
              <br></br>
              <div className='signup-profile-pic-container'>
                <img src={imgPreview || botImg} alt='' className='signup-profile-pic' />
                <label htmlFor='image-upload' className='image-upload-label'>
                  <MDBIcon fas icon='plus-circle add-picture-icon' />
                </label>
                <input type='file' id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg} />
              </div>
              <br></br>
              <MDBInput className='mb-4' type='text' name='name' label='Name' value={credentials.name} onChange={handleChange} required />
              <br></br>
              <MDBInput className='mb-4' type='text' name='email' label='Email Address' value={credentials.email} onChange={handleChange} required />
              <br></br>
              <MDBInput className='mb-4' type='password' name='password' label='Password' value={credentials.password} onChange={handleChange} required />
              <br></br>
              <MDBInput className='mb-4' type='password' name='confirm' label='Confirm Password' value={credentials.confirm} onChange={handleChange} required />
            <MDBBtn type='submit' className='mb-4' block>
              {uploadingImg ? 'Signing you up..' : 'Signup'}
            </MDBBtn>
            <div className='text-center'>
              <p>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </div>
          </form>
          <p className='error-message'>&nbsp;{error}</p>
        </MDBCol>
        <MDBCol md={5} className='signup-bg'></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}