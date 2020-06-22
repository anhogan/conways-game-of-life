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

  handleColumnChange = (e) => {
    if (!this.props.running) {
      var size = this.props.size;
      size[0] = e.target.value;
      this.setState({ size: size });
      this.renderGrid();
    };
  };

  handleRowChange = (e) => {
    if (!this.props.running) {
      var size = this.props.size;
      size[1] = e.target.value;
      this.setState({ size: size });
      this.renderGrid();
    };
  };

  render() {
    return (
      <div>
        <h4>Generation: </h4>
        <GridDiv>
          {this.renderGrid()}
        </GridDiv>
        <div>
          <div>
            <label>Columns</label>
            <input
              type="text"
              value={this.props.size[0]}
              onChange={this.handleColumnChange} />
          </div>
          <div>
            <label>Rows</label>
            <input
              type="text"
              value={this.props.size[1]}
              onChange={this.handleRowChange} />
          </div>
        </div>
      </div>
    );
  };
};

export default Grid;