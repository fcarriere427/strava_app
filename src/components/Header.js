import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavItem, NavLink, NavbarText, NavbarBrand  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';
import Tracker from './Tracker'
import List from './List'

class Header extends Component {

  render() {
    return (
      <div className="sticky-top">

        <Navbar color="warning" expand="xs">

          <NavbarBrand href="/">
            <img className="Image-fluid" src={require("../assets/logo.png")}
              alt="logo"
              width="40"
              height="40"
            >
            </img>
          </NavbarBrand>

          <Nav className="ml-auto" pills >
            <NavItem>
              <NavLink
                exact to="/tracker"
                className="active"
                tag={RRNavLink}
              activeClassName="active">
                >
                Tracker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href ="/list"
                // style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
              >
                List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href ="/reports"
                // style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
              >
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/strava_old_app"
                style={{color: "grey"}}
              >
                <i>Old app</i>
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
