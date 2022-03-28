class Tracker extends React.Component {
  constructor(props){
    super(props);
    this.state = {cumulAnnuel: 0};
  }

  componentDidMount(){
    fetch('/strava/testAPI')
    //.then(response => response.json())
    .then(data => {
      console.log("réponse de l'API Test : " + data);
      this.setState({ cumulAnnuel: data });
    })
    .catch(error => {
      console.log('erreur fetch testAPI = ' + error);
    })
  }

  render() {
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
        <h3>Current mileage: {this.state.cumulAnnuel} km</h3>
      </div>
    );
  }
}

export default Tracker;
