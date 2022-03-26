import logo from './atom.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="tracker">
          <StravaTracker name = "Florian"/>
        </div>
        <p><a href="strava_old_app">Ancienne appli Strava</a></p>
      </div>
    );
  }
}

class StravaTracker extends React.Component {
  render() {
      return (
        <div className="tracker">
          <h1>Tracker for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
}

export default App;
