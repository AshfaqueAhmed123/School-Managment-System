import React from 'react'
import admin_icon from "@/assets/admin-icon.png"
import profile_icon from "@/assets/profile-user.png"
import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <div>
       <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={admin_icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Admin DashBoard
          </Navbar.Brand>
        </Container>
      
      </Navbar>
    </div>
  )
}

export default NavbarComponent
