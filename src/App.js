import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Tracker from './components/Tracker';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name = "Florian" />
        <Tracker />
        <Footer />
      </div>
    );
  }
}

export default App;
