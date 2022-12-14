import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavBar({ user, setUser }) {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#FFF8E1' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.imgur.com/LVWGHBr.gif'
              height='90'
              width='90'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' to='/profile'>
                  Profile
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/chat'>Chat</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='' onClick={handleLogOut}>Log Out</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

  
//   return (
//     <nav>
//       <Link to="/orders">Order History</Link>
//       &nbsp; | &nbsp;
//       <Link to="/orders/new">New Order</Link>
//       &nbsp; | &nbsp;
//       <span>Welcome, {user.name}</span>
//       &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
//     </nav>
//   );
// }