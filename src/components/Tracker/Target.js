import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  render(){
    return(
      <div>
        <input type="range" min="500" max ="1500" value={this.props.target} onChange={evt => this.props.handler}/>
        <p> Target: {this.props.value} </p>
      </div>
    )
  }
}

export default Target
