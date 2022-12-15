import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './HomePage.css';

export default function HomePage() {
  return (
    <MDBRow>
      <MDBCol md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1>Share messages with your friends</h1>
          <p>Hermes Messenger lets you connect with the world</p>
          <Link to="/chat">
            <MDBBtn color="success">
              Get Started <MDBIcon fas icon="comments" className="message_icon" />
            </MDBBtn>
          </Link>
        </div>
      </MDBCol>
      <MDBCol md={6} className="home_bg"></MDBCol>
    </MDBRow>
  );
}