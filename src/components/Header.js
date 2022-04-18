import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavItem, NavLink, NavbarText, NavbarBrand  } from 'reactstrap'
import Tracker from './Tracker'
import List from './List'


// import logo from './logo.png';

class Header extends Component {
  render() {
    // console.log("window.location = " + window.location)
    return (
      <div className="sticky-top">
        <Navbar
          color="warning"
          expand="xs"
        >
          <NavbarBrand href="/">
            <img className="Image-fluid" src={require("../assets/logo.png")}
              alt="logo"
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
                // style={ isActive => ({ color: isActive ? 'green' : 'blue' })}
                style={{color: "green"}}
                to ="/tracker"
              >
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                to ="/list"
              >
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                to ="/reports"
              >
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/strava_old_app"
                // className="nav-link"
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
