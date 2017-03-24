import React from 'react';
import Wrapper from './Wrapper'
import TidbitTitle from './TidbitTitle'

export default class FeatureTidbit extends React.Component {
  
  static propTypes = {
    feature: React.PropTypes.object
  };

  render() {
    return (
      <Wrapper>
        <TidbitTitle>{this.props.feature.title}</TidbitTitle>
      </Wrapper>
    );
  }
}
