import React, { Component } from 'react'
import { Button} from 'reactstrap'


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

export {
  UpdateButton,
  ReloadButton,
  UpdateDisplay
}
