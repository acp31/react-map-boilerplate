import React from 'react';
import Wrapper from './Wrapper'
import FeatureTitle from './FeatureTitle'
import FeatureMeta from './FeatureMeta'
import { Card, CardMedia, CardText } from 'material-ui/Card';

export default class FeatureExcerpt extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    image: React.PropTypes.string,
    meta: React.PropTypes.string
  };

  render() {
    return (
      <Wrapper>
        <Card>
          <CardMedia>
            <img src={this.props.image} alt="test"/>
          </CardMedia>
          <CardText>
            <FeatureTitle>{this.props.title}</FeatureTitle>
            <FeatureMeta>{this.props.meta}</FeatureMeta>
          </CardText>
        </Card>
      </Wrapper>
    );
  }
}
