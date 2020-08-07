import React, { Component } from 'react';

import { InputDiv, Inputs, Labels } from './Styles';

class InputBoxes extends Component {
  render() {
    return (
      <>
        <InputDiv>
          <Labels>Cell Size</Labels>
          <Inputs
            type="text"
            value={this.props.cellSize}
            onChange={this.props.handleCellSizeChange} />
        </InputDiv>
        <InputDiv>
          <Labels>Animation Speed</Labels>
          <Inputs
            type="text"
            value={this.props.interval}
            onChange={this.props.handleIntervalChange} />
        </InputDiv>
      </>
    );
  };
};

export default InputBoxes;