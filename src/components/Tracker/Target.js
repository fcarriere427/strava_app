import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <input type="range" min="500" max ="1500" value={this.props.value} onChange={this.props.handler}/>
        <p> Target: {this.props.value} </p>
      </div>
    )

  }
}

export default Target
