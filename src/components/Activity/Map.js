import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
       position: "[48.85928529158136, 2.2934747009596705]"
     };
   }

  componentDidMount(){
    console.log("this.props.activity.start_latlng = " + this.props.activity.start_latlng);
    this.setState({position: this.props.activity.start_latlng });
    console.log("this.state.position = " + this.state.position);
  }

  render() {

    //let start_position = [48.87, 2.24];
    //start_position = this.props.activity.start_latlng;
    //let polyline = this.props.activity.map.summary_polyline;

    //console.log("start_position = " + start_position);
    //console.log("polyline = " + polyline);

    return (
      <MapContainer
        center={this.state.position}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '600px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polyline
          positions={polyline}
        /> */}
      </MapContainer>


    );
  }
}

export {
  Map
}
