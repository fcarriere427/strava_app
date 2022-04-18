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
            <img className="Image-fluid" src={require("../assets/logo.png")}
              alt="atom logo"
              width="40"
              height="40"
            >
            </img>
          </NavbarBrand>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink
                href="/tracker"
                active={window.location === '/tracker'}
              >
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/list"
                active=true
              >
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/reports"
                active={window.location === '/reports'}
              >
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/strava_old_app"
                className="nav-link"
              >
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
