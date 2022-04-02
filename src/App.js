import React, {Component} from "react";
import './App.css';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Tracker from './components/Tracker';
import List from './components/List';


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
