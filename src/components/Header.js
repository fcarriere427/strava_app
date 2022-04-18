import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavItem, NavLink, NavbarText, NavbarBrand  } from 'reactstrap'
import { withRouter } from 'react-router'
import Tracker from './Tracker'
import List from './List'

const Head = props => { // Header sans router
  const { location } = props;
  return (
    <div className="sticky-top">

      <Navbar bg="warning" expand="xs">

        <NavbarBrand href="/">
          <img className="Image-fluid" src={require("../assets/logo.png")}
            alt="logo"
            width="40"
            height="40"
          >
          </img>
        </NavbarBrand>

        <Nav activeKey={location.pathname}>
          <NavItem>
            <NavLink
              href ="/tracker"
              // style={ isActive => ({ color: isActive ? 'green' : 'blue' })}
              style={{color: "green"}}
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
              // className="nav-link"
            >
              Old app
            </NavLink>
          </NavItem>
          <NavbarText>
            {this.props.name}
          </NavbarText>

        </Nav>

      </Navbar>
    </div>
  );
}

const Header = withRouter(Head);

export default Header;
