import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

class Map extends Component {

  constructor(props){
    super(props);
    this.state = { position: "[48, 2]" }; // position: "[48.85928529158136, 2.2934747009596705]"
  }

  componentDidMount(){
    this.setState({ position: this.props.activity.start_latlng });
  }

  render() {
    return (
      <MapContainer
        center={this.state.position}
        //center={[48,2]}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '600px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <RunTrace /> */}
      </MapContainer>
    );
  }
}

class RunTrace extends Component {

  //start_position = this.props.activity.start_latlng;
  //let polyline = this.props.activity.map.summary_polyline;

  /* <Polyline
    positions={polyline}
  /> */


  //setView(e.latlng, parentMap.getZoom()


}

export {
  Map
}
