import React from 'react';
import Wrapper from './Wrapper'
import FeatureExcerpt from '../FeatureExcerpt'
import { GridTile, GridList } from 'material-ui/GridList';

export default class FeatureList extends React.Component {

  static propTypes = {
    features: React.PropTypes.array
  };

  renderFeatures(features) {

    const gridTileStyle = {
      padding: 2
    };

    return (
      <GridList cellHeight="auto" padding={30}>
        {features.map( function(feature, index) {
          return (
            <GridTile key={"feature_" + index} style={gridTileStyle}>
              <FeatureExcerpt title={feature.title} meta={feature.meta} image={feature.image} />
            </GridTile>
          );
        })}    
      </GridList>
    );
  }

  returnEmptySet() {
    return (<div>No Features Found</div>)
  }
  
  render() {

    let content = false;

    // We need a padding of two so the card border shows.

    let featuresToShow;
    if(this.props.filteredFeatures) {
      featuresToShow = this.props.filteredFeatures;
    } else {
      featuresToShow = this.props.features;
    }

    if(featuresToShow.length) {
      content = this.renderFeatures(featuresToShow);
    } else {
      content = this.returnEmptySet();
    }

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}
