import React, { Component } from 'react';
import { Map, GoogleApiWrapper , Marker } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        markerPosition: {
          lat: 37.774929,
          lng: -122.419416
        }
      };
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416
        }}
        
      >
         <Marker
          position={this.state.markerPosition}
        />
      </Map>
     
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDW1i79_hM1aiDesGHfQ8AxVFHCz3Rork8'
})(MapContainer);