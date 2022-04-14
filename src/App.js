import React from "react";
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Tracker from './components/Tracker/Tracker';
// import List from './components/List';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name = "Florian" />
        <Tracker />
        {/* <List /> */}
        <Footer />
        <p className="fw-light text-black"><a href="strava_old_app">Ancienne appli Strava</a></p>
      </div>
    );
  }
}

export default App;
