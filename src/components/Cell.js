import React, { Component } from 'react';

import { CellDiv } from './Styles';

class Cell extends Component {
  render() {
    return (
      // Determines the cell area for each portion of the grid - matches backgroundSize style component on grid board
      <CellDiv style={{
        left: `${this.props.cellSize * this.props.x + 1}px`,
        top: `${this.props.cellSize * this.props.y + 1}px`,
        width: `${this.props.cellSize - 1}px`,
        height: `${this.props.cellSize - 1}px`,
      }}></CellDiv>
    );
  };
};

export default Cell;