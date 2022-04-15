import React, { Component } from 'react'
import { Container, Row, Col, Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, NavbarBrand } from 'reactstrap'


///////////////////////////////////////////////////////////////////////////////////////////////
class TargetBlock extends Component {
  render(){
    return(
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
                <DropdownMenu right>
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

        /*
            <Container fluid className='text-black text-center'>
            <Row className="py-2">
            <div>
            <input type="range" min="500" max ="1500" step="10" value={this.props.value} onChange={this.props.updateHandler}/>
            <p> Target: {this.props.value} </p>
            </div>
            </Row>
            <Row className="py-2">
            <div>
            <input type="button" value="reset" onClick={this.props.resetHandler}/>
            </div>
            </Row>
        </Container> */

      )
    }
  }

        export {
          TargetBlock
        }
