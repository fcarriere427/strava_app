import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'


///////////////////////////////////////////////////////////////////////////////////////////////
class UpdateButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Button color="primary" onClick={this.props.updateActivities}>
        Update
      </Button>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class ReloadButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Button color="danger"  onClick={this.props.reloadActivities}>
        Reload(!)
      </Button>
    )
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        Updated with {this.props.count} activities
      </div>
    )
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       count: "xxx"
     };
  }

  // Actions pour les boutons "update" & "reload"
  updateActivities() {
    console.log("on va lancer updateActivities");
    let url = 'https://letsq.xyz/strava/update';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ count : response.data });
        console.log(this.state.count + " activité(s) récupérée(s) !");
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  reloadActivities() {
    console.log("on va lancer reloadActivities, c'est long !!!")
    let url = 'https://letsq.xyz/strava/reload';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ count : response.data });
        console.log(this.state.count + " activité(s) récupérée(s) !");
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }


  render(){
    return(
      <Row className="bg-light text-black border py-2">
        <Col md="4">
          <UpdateButton color="primary" updateActivities={() => this.updateActivities()} />
        </Col>
        <Col md="4">
          <UpdateDisplay count={this.state.count} />
        </Col>
        <Col md="4">
          <ReloadButton color="danger"  reloadActivities={() => this.reloadActivities()} />
        </Col>
      </Row>
    )
  }
}

export { UpdateBar }
