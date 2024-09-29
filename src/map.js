import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{ lat: 33.5726493, lng:-7.6065321 }}
        zoom={13}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5KS2V-FFglrqWu9Iye70n0rODwQqk8FA'
})(MapContainer);