import React from 'react';
import Wrapper from './Wrapper'
import Input from './Input'

export default class Filter extends React.Component {
  
  static propTypes = {
    onFilterUpdate: React.PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      filterText: ""
    }

    this.updateFilterValue = this.updateFilterValue.bind(this);
  }

  updateFilterValue(event, value) {

    this.props.onFilterUpdate(event.target.value);

    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    return (
      <Wrapper>
        <Input type="text" onChange={this.updateFilterValue} />
      </Wrapper>
    );
  }
}
