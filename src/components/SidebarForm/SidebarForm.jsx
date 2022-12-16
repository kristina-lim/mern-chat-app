import React from 'react';
import {
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function SidebarForm() {
  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'];

  return (
    <>
      <h2>Available Rooms</h2>
      <MDBListGroup>
        {rooms.map((room, idx) => (
          <MDBListGroupItem key={idx}>{room}</MDBListGroupItem>
        ))}
      </MDBListGroup>
      <h2>Members</h2>
    </>
  )
}