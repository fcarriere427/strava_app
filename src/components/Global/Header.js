import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, NavbarBrand  } from 'reactstrap'

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
              width="30"
              height="24"
            >
            </img>
          </NavbarBrand>
          {/* <NavbarToggler onClick={function noRefCheck(){}} /> */}
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/tracker/">
                  Tracker
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/list/">
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
