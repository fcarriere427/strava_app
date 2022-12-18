import React, { Component } from 'react';
//import { Container, Row, Col, Nav, Navbar, NavItem, NavLink, NavbarText, NavbarBrand  } from 'reactstrap'
import { Nav, Navbar, NavItem, NavLink, NavbarBrand  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';
//import Tracker from './Tracker'
//import List from './List'

class Header extends Component {

  render() {
    return (
      <div className="sticky-top">

        <Navbar color="warning" expand="xs">

          <NavbarBrand href="/">
            <img className="Image-fluid" src={require("../assets/logo.png")}
              alt="logo"
              width="30"
              height="30"
            >
            </img>
          </NavbarBrand>

          <Nav className="ml-auto" pills>
            <NavItem>
              <NavLink
                to="/tracker"
                tag={RRNavLink} activeclassname="active">
                >
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  // className="active" // ça fonctionne :-) :-) :-)
                to ="/list"
                tag={RRNavLink} activeclassname="active">
                >
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to ="/reports"
                tag={RRNavLink} activeclassname="active">
                >
                Reports
              </NavLink>
            </NavItem>
            {/* <NavbarText>
              {this.props.name}
              </NavbarText>
            */}
          </Nav>

        </Navbar>
      </div>
    );
  }
}

export default Header;
