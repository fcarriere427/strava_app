import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavItem, NavLink, NavbarText, NavbarBrand  } from 'reactstrap'
import Tracker from './Tracker'
import List from './List'


// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="warning"
          expand="xs"
        >
          <NavbarBrand href="/">
            <img className="Image-fluid" src="/logo512.png"
              alt=""
              width="50"
              height="50"
            >
            </img>
          </NavbarBrand>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/tracker/" className="active" element={<Tracker />}>
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list/" element={<List />}>
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reports/">
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/strava_old_app/">
                Old app
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            {this.props.name}
          </NavbarText>

        </Navbar>
      </div>
    );
  }
}

export default Header;
