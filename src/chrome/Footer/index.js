import React from 'react';
import Wrapper from './Wrapper'

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}
