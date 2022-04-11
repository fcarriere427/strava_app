import React, { Component } from 'react';
import { Container } from 'reactstrap'

// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <Container fluid className = "bg-warning text-black text-center my-auto ">
        <div>
          <header>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p className="fw-bold py-3">{this.props.name}'s Strava App</p>
          </header>
        </div>
      </Container>
    );
  }
}

export default Header;
