import React, { Component } from 'react';
import { Container } from 'reactstrap'

// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <Container fluid className = "bg-warning text-black text-center">
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h3 className="App-title">{this.props.name}'s Strava App</h3>
          </header>
        </div>
      </Container>
    );
  }
}

export default Header;
