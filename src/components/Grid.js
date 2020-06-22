import React, { Component } from 'react';

import Cell from './Cell';

import { RowDiv, GridDiv } from './Styles';

class Grid extends Component {
  renderGrid = () => {
    var grid = []
    var row = []

    for (let i = 0; i < this.props.size[0]; i++) {
      for (let j = 0; j < this.props.size[1]; j++) {
        row.push(<Cell key={[i, j]} />)
      };

      grid.push(<RowDiv key={i}>{row}</RowDiv>)
      row = []
    };

    return grid;
  };

  render() {
    return (
      <div>
        <h4>Generation: </h4>
        <GridDiv>
          {this.renderGrid()}
        </GridDiv>
      </div>
    );
  };
};

export default Grid;