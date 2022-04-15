import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, NavbarBrand  } from 'reactstrap'

// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
        >
          <NavbarBrand href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/components/">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// <Container fluid className = "bg-primary text-white text-center my-auto ">
//   <div>
//     <header>
//       {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       <p className="fw-bold py-3">{this.props.name}'s Strava App</p>
//     </header>
//   </div>
// </Container>

export default Header;
