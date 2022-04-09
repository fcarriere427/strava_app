import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Tracker from './components/Tracker/Tracker';
// import List from './components/List';


class App extends React.Component {
  render() {
    return (
      <div className="App" class='container-fluid bg-dark text-white border'>
        <Header name = "Florian" />
        <Tracker />
        {/* <List /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
