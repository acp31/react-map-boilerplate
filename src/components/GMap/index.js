import React from 'react';
import Wrapper from './Wrapper'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const markers = [];

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
)));

export default class Map extends React.Component {

  render() {
    return (
        <GettingStartedGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          loadingElement={
            <div style={{ height: `100%` }}>
              <p>Loading</p>
            </div>
          }        
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={markers}
          onMarkerRightClick={_.noop}
        />
    );
  }
}