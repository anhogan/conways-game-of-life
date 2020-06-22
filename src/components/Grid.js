import React, { Component } from 'react';

import Cell from './Cell';
import BoardControls from './BoardControls';
import Evolution from './Evolution';

import { RowDiv, GridDiv } from './Styles';

class Grid extends Component {
  state = {
    size: [25, 25],
    running: false,
    interval: 50,
    generation: 0,
    evolution: new Evolution()
  };

  setCellState = (cell) => {
    if (!this.state.running) {
      this.setState({ evolution: this.state.evolution.setCellState(cell) });
    };
  };

  renderGrid = () => {
    var grid = []
    var row = []
  
    for (let i = 0; i < this.state.size[0]; i++) {
      for (let j = 0; j < this.state.size[1]; j++) {
        if (this.state.evolution.isAlive(`${i}, ${j}`)) {
          row.push(<Cell key={[i, j]} position={{ x: i, y: j }} live={true} setState={this.setCellState(this)} />);
        } else {
          row.push(<Cell key={[i, j]} position={{ x: i, y: j }} live={false} setState={this.setCellState(this)} />);
        };
      };
  
      grid.push(<RowDiv key={i}>{row}</RowDiv>)
      row = []
    };
  
    return grid;
  };
  
  handleColumnChange = (e) => {
    if (!this.state.running) {
      var size = this.state.size;
      size[0] = e.target.value;
  
      this.setState({ size: size });
  
      this.renderGrid();
    };
  };
  
  handleRowChange = (e) => {
    if (!this.state.running) {
      var size = this.state.size;
      size[1] = e.target.value;
  
      this.setState({ size: size });
  
      this.renderGrid();
    };
  };

  handleIntervalChange = (e) => {
    this.setState({ interval: e.target.value });
  };

  startGame = () => {
    if (!this.state.running) {
      this.setState({ running: true });
    };
  };

  stopGame = () => {
    this.setState({ running: false });
  };

  clearGrid = () => {
    console.log('Cleared')
  };

  advanceGeneration = () => {
    this.setState({ generation: this.state.generation + 1 });
  };

  run = () => {
    this.setState({ evolution: this.state.evolution.addGeneration() });
  };

  render() {
    return (
      <div>
        <h4>Generation: {this.state.generation}</h4>
        <GridDiv>
          {this.renderGrid()}
        </GridDiv>
        <div>
          <div>
            <label>Columns</label>
            <input
              type="text"
              value={this.state.size[0]}
              onChange={this.handleColumnChange} />
          </div>
          <div>
            <label>Rows</label>
            <input
              type="text"
              value={this.state.size[1]}
              onChange={this.handleRowChange} />
          </div>
          <div>
            <label>Animation Speed</label>
            <input
              type="text"
              value={this.state.interval}
              onChange={this.handleIntervalChange} />
          </div>
        </div>
        <BoardControls startGame={this.startGame} stopGame={this.stopGame} clearGrid={this.clearGrid} />
        <Evolution generation={this.state.generation} advanceGeneration={this.advanceGeneration} />
      </div>
    );
  };
};

export default Grid;