import React, { Component } from 'react';
import Wrapper from './Wrapper'
import AppBody from '../../chrome/AppBody'
import Header from '../../chrome/Header'
import FeatureList from '../../components/FeatureList'
import GMap from '../../components/GMap'
import Filter from '../../components/Filter'
import Footer from '../../chrome/Footer'
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fuzzy from 'fuzzy'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const features = [
  {
    title: "Test Title #1",
    meta: "here's some meta about the first one",
    image: "http://placehold.it/500x200",
    position: {
      lat: 41.8781,
      lng: -87.6298,
    }        
  },
  {
    title: "Test Title #2",
    meta: "here's some meta about the second one",
    image: "http://placehold.it/500x200",
    position: {
      lat: 44.8781,
      lng: -89.6298,
    }  
  },     
  {
    title: "Test Title #3",
    meta: "here's some meta about the third one",
    image: "http://placehold.it/500x200",
    position: {
      lat: 43.8781,
      lng: -87.6298,
    }  
  },
  {
    title: "Lorem Ipsum",
    meta: "here's some meta about the third one",
    image: "http://placehold.it/500x200",
    position: {
      lat: 36.8781,
      lng: -84.6298,
    }  
  }
];

const filterOutFeatures = function(features, filter) {
  const options = {
    extract: function(el) { return el.title; }
  };
  const results = fuzzy.filter(filter, features, options);
  const matches = results.map(function(el) { return el.original; });
  return matches;
}

class App extends Component {

  constructor() {

    super();

    this.state = {
      activeFeatureFilter: "",
      filteredFeatures: false
    }

    this.updateActiveFilter = this.updateActiveFilter.bind(this);
  }

  updateActiveFilter(newFilterValue) {
    this.setState({
      activeFeatureFilter: newFilterValue
    });

    const filteredFeatures = filterOutFeatures(features, newFilterValue);
    this.setState({
      filteredFeatures: filteredFeatures
    });

  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Wrapper>
          <Header>
            <AppBar title="Feature Map"/>
          </Header>
          <AppBody>
            <Grid fluid>
              <Row>
                <Col xs={12} md={6}>
                  <Filter onFilterUpdate={this.updateActiveFilter}/>
                  <FeatureList
                    filteredFeatures={this.state.filteredFeatures}
                    filter={this.state.activeFeatureFilter}
                    features={features}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <GMap 
                    filteredFeatures={this.state.filteredFeatures}
                    filter={this.state.activeFeatureFilter}
                    features={features}
                  />
                </Col>                
              </Row>
            </Grid>
          </AppBody>
          <Footer></Footer>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
