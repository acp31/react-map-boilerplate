import React from 'react';
import Wrapper from './Wrapper'

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}
