import React, { Component } from 'react';
// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2 className="App-title">Welcome to my personal Strava App</h2>
        </header>
      </div>
    );
  }
}

export default Header;