import React, {Component} from "react";
import './App.css';
import Header from './components/Global/Header/Header';
import Footer from './components/Global/Footer/Footer';
import Tracker from './components/Tracker/Tracker';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name = "Florian" />
        <Tracker />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
