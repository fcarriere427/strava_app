import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my personal Strava App</h1>
        </header>
      </div>
    );
  }
}

export default Header;

// class Header extends React.Component {
//   render() {
//     return(
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Welcome to my personal Strava app</p>
//       </header>
//     )
//   }
// }
