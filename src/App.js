import React from "react";
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Tracker from './components/Tracker/Tracker';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name = "Florian" />
        <Tracker />
        <Footer />
        <p className="fw-light text-black text-center"><a href="strava_old_app">Ancienne appli Strava</a></p>
      </div>
    );
  }
}

export default App;
