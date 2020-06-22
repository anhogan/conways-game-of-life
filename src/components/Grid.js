import React, { Component } from 'react';

import Cell from './Cell';
import BoardControls from './BoardControls';
import Evolution from './Evolution';

import { RowDiv, GridDiv, InputContainer, InputDiv, Inputs, Labels } from './Styles';

class Grid extends Component {
  state = {
    size: [25, 25],
    running: false,
    interval: 50,
    generation: 0,
    evolution: new Evolution()
  };

  // setCellState = (cell) => {
  //   if (!this.state.running) {
  //     this.setState({ evolution: this.state.evolution.setCellState(cell) });
  //   };
  // };

  renderGrid = () => {
    var grid = []
    var row = []
  
    for (let i = 0; i < this.state.size[0]; i++) {
      for (let j = 0; j < this.state.size[1]; j++) {
        if (this.state.evolution.isAlive(`${i}, ${j}`)) {
          row.push(<Cell key={[i, j]} position={{ x: i, y: j }} live={true} />);
        } else {
          row.push(<Cell key={[i, j]} position={{ x: i, y: j }} live={false} />);
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
      this.setState({ running: true }, () => {
        this.intervalRef = setInterval(() => this.run(), this.state.interval);
      });
    };
  };

  stopGame = () => {
    this.setState({ running: false }, () => {
      if (this.intervalRef) {
        clearInterval(this.intervalRef);
      };
    });
  };

  clearGrid = () => {
    // Turn all cells to dead - condense functions first for easier rendering
    console.log('Cleared');
  };

  advanceGeneration = () => {
    this.setState({ generation: this.state.generation + 1 });
  };

  run = () => {
    this.setState({ evolution: this.state.evolution.newGeneration() });
  };

  render() {
    return (
      <div>
        <h4>Generation: {this.state.generation}</h4>
        <GridDiv>
          {this.renderGrid()}
        </GridDiv>
        <InputContainer>
          <InputDiv>
            <Labels>Columns</Labels>
            <Inputs
              type="text"
              value={this.state.size[0]}
              onChange={this.handleColumnChange} />
          </InputDiv>
          <InputDiv>
            <Labels>Rows</Labels>
            <Inputs
              type="text"
              value={this.state.size[1]}
              onChange={this.handleRowChange} />
          </InputDiv>
          <InputDiv>
            <Labels>Animation Speed</Labels>
            <Inputs
              type="text"
              value={this.state.interval}
              onChange={this.handleIntervalChange} />
          </InputDiv>
        </InputContainer>
        <BoardControls startGame={this.startGame} stopGame={this.stopGame} clearGrid={this.clearGrid} />
        <Evolution generation={this.state.generation} advanceGeneration={this.advanceGeneration} />
      </div>
    );
  };
};

export default Grid;