import React, { Component } from 'react';

import { cellSize } from '../config/grid_variables';

import { CellDiv } from './Styles';

class Cell extends Component {
  render() {
    return (
      // Style how the cell appears within the grid
      <CellDiv style={{
        left: `${cellSize * this.props.x + 1}px`,
        top: `${cellSize * this.props.y + 1}px`,
        width: `${cellSize - 1}px`,
        height: `${cellSize - 1}px`,
      }}></CellDiv>
    );
  };
};

export default Cell;