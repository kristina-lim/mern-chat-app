import React from 'react';
import {
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './MessageForm.css';

export default function MessageForm() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className='messages-output'>
      <form className='message-form' onSubmit={handleSubmit}>
        <MDBInput className='message-input' type='text' placeholder='Your message'></MDBInput>
        <MDBCol md='1'>
          <MDBBtn className='message-btn' variant='primary' type='submit' style={{ width: '100%', backgroundColor: 'lightblue' }}>
            <MDBIcon far icon="paper-plane" />
          </MDBBtn>
        </MDBCol>
      </form>
    </div>
  )
}