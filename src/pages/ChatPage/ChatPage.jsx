import React from 'react';
import SidebarForm from '../../components/SidebarForm/SidebarForm';
import MessageForm from '../../components/MessageForm/MessageForm';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

export default function ChatPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={4}>
          <SidebarForm />
        </MDBCol>
        <MDBCol md={8}>
          <MessageForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}