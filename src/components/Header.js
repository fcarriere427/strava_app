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
            <img className="Image-fluid" src={require("../assets/logo512.png")}
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
                href="/tracker/"
                className="{isActive => 'nav-link' + (!isActive ? 'unselected' : '')"
                element={<Tracker />}
              >
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/list/"
                className="{isActive => 'nav-link' + (!isActive ? 'unselected' : '')"
                element={<List />}
              >
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/reports/"
                className="{isActive => 'nav-link' + (!isActive ? 'unselected' : '')"
              >
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/strava_old_app/"
                className="{isActive => 'nav-link' + (!isActive ? 'unselected' : '')"
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
