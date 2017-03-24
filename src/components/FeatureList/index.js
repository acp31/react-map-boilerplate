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

    console.log(features);

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

    if(this.props.features.length) {
      content = this.renderFeatures(this.props.features);
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
