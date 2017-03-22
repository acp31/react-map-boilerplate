import React, { Component } from 'react';
import Wrapper from './Wrapper'
import AppBody from '../../chrome/AppBody'
import Header from '../../chrome/Header'
import FeatureList from '../../components/FeatureList'
import GMap from '../../components/GMap'
import Footer from '../../chrome/Footer'
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {

    const muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500,
      },
    });

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Wrapper>
            <Header>
              <AppBar title="hello"/>
            </Header>
            <AppBody>
            <Grid fluid>
              <Row>
                <Col xs={12} md={6}>
                  <FeatureList />
                </Col>
                <Col xs={12} md={6}>
                  <GMap />
                </Col>                
              </Row>
            </Grid>
            </AppBody> 
            <Footer>
            </Footer>

          </Wrapper>
        </MuiThemeProvider>
    );
  }
}

export default App;
