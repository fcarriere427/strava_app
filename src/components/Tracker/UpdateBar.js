import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'
const axios = require('axios').default;

//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       message: "xxx"
     };
  }

  // Actions pour les boutons "update" & "reload"
  updateActivities() {
    console.log("on va lancer updateActivities");
    let url = 'https://letsq.xyz/strava/update';
    this.setState({ message : "fetching activities..." });
    axios.get(url)
    .then(
      (response) => {
        this.setState({ message : response.data });
        console.log(this.state.message + " activities fetched!");
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  reloadActivities() {
    console.log("on va lancer reloadActivities, c'est long !!!")
    let url = 'https://letsq.xyz/strava/reload';
    this.setState({ message : "fetching activities..." });
    axios.get(url)
    .then(
      (response) => {
        this.setState({ message : response.data });
        console.log(this.state.message + " activities fetched!");
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }


  render(){
    return(
      <Row className="bg-light text-black border py-2">
        <Col xs="4">
          <LastActivityDate />
        </Col>
        <Col xs="8">
          <Row>
            <Col xs="6">
              <Button color="primary" onClick={(evt) => this.updateActivities()}>
                Update
              </Button>
            </Col>
            <Col xs="6">
              <Button color="danger"  onClick={(evt) => this.reloadActivities()}>
                Reload(!)
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <UpdateDisplay count={this.state.count} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////
class LastActivityDate extends Component {
  constructor(props){
    super(props);
    this.state = { lastActivityDate: "" };
  }
  componentDidMount(){
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate : response.data.last_activity_date });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }
  render() {
    return (
      <p className="fw-light">Last activity:<br/> {this.state.lastActivityDate}</p>
        );
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateDisplay extends Component {
  render(){
    if(this.props.count !== "xxx"){
      return(
        <p className="fw-light">
          Updated with {this.props.count} activities
        </p>
      )
    } else {
      return(
        <p className="fw-light">
          Not updated yet!
        </p>
      )
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
export { UpdateBar }
