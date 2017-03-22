import React from 'react';
import Wrapper from './Wrapper'
import FeatureExcerpt from '../FeatureExcerpt'
import { GridTile, GridList } from 'material-ui/GridList';

export default class FeatureList extends React.Component {
  
  render() {

    // We need a padding of two so the card border shows.

    const gridTileStyle = {
      padding: 2
    };

    return (
      <Wrapper>
        <GridList cellHeight="auto" padding={30}>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>        
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>
          <GridTile style={gridTileStyle}>
            <FeatureExcerpt title="A Title" meta="Some Meta" image="http://placehold.it/500x500" />
          </GridTile>        
        </GridList>
      </Wrapper>
    );
  }
}
