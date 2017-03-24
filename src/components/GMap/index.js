import React from 'react';
import FeatureTidbit from '../FeatureTidbit'
import Wrapper from './Wrapper'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import InfoBox from "react-google-maps/lib/addons/InfoBox";

const renderInfoWindow = (marker, index) => {
  // Normal version: Pass string as content
  
  const featureLocation = {
    lat: marker.position.lat,
    lng: marker.position.lng 
  };

  return (
    <InfoBox
      key={`${index}_info_window`}
      defaultPosition={featureLocation}
      options={{closeBoxURL: "", enableEventPropagation: true, disableAutoPan: true, boxStyle: { opacity: 1,width: "225px" }}}>
      <FeatureTidbit feature={marker} />
    </InfoBox>
  )
}

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (

  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 44.8781, lng: -87.6298 }}
    onClick={props.onMapClick}
  >
    { props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      >
        {renderInfoWindow(marker, index)}
      </Marker>
    ))}
  </GoogleMap>
)));

export default class GMap extends React.Component {

  render() {

    let featuresToShow;
    if(this.props.filteredFeatures) {
      featuresToShow = this.props.filteredFeatures;
    } else {
      featuresToShow = this.props.features;
    }

    return (
      <Wrapper>
        <GettingStartedGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          loadingElement={
            <div style={{ height: `100%` }}>
              <p>Loading Map...</p>
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
          markers={featuresToShow}
          onMarkerRightClick={_.noop}
        />
        </Wrapper>
    );
  }
}