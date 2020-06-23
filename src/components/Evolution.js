import React, { Component } from 'react';

// TODO: fix no render error and add a constructor for passing data
class Evolution extends Component {
  // TODO: condense into one Map of cells with a state to manage alive / dead
  state = {
    liveCells: new Map(),
    deadCells: new Map(),
    nextGeneration: new Map()
  };

  // TODO: find from cell state and return if live is true > remove this
  isAlive = (key) => {
    return this.state.liveCells.has(key);
  };

  // TODO: condense into one function with calculateDeadNeighbors
  calculateLiveNeighbors = (cell) => {
    var numAlive = 0;

    // Set up 2D array to traverse
    for (let i = cell.x - 1; i <= cell.x + 1; i++) {
      for (let j = cell.y - 1; j <= cell.y + 1; j++) {
        // Remove current cell from analysis
        if (i === cell.x && j === cell.y) {
          continue;
        };

        if (this.isAlive(`${i}, ${j}`)) {
          numAlive++;
        } else {
          this.state.deadCells.set(`${i}, ${j}`, { x: i, y: j });
        };
      };
    };

    if (numAlive === 2 || numAlive === 3) {
      this.state.nextGeneration.set(`${cell.x}, ${cell.y}`, { x: cell.x, y: cell.y });
    };
  };

  calculateDeadNeighbors = (cell) => {
    var numAlive = 0;

    // Set up 2D array to traverse
    for (let i = cell.x - 1; i <= cell.x + 1; i++) {
      for (let j = cell.y - 1; j <= cell.y + 1; j++) {
        // Remove current cell from analysis
        if (i === cell.x && j === cell.y) {
          continue;
        };

        if (this.isAlive(`${i}, ${j}`)) {
          numAlive++;
        };
      };
    };

    if (numAlive === 3) {
      this.state.nextGeneration.set(`${cell.x}, ${cell.y}`, { x: cell.x, y: cell.y });
    };
  };

  // TODO: condense into one forEach function
  newGeneration = () => {
    this.state.liveCells.forEach((cell) => {
      this.calculateLiveNeighbors(cell)
    });

    this.state.deadCells.forEach((cell) => {
      this.calculateDeadNeighbors(cell)
    });

    this.props.advanceGeneration();

    return new Evolution(this.props.generation, this.state.nextGeneration);
  };

  render() {
    return (
      <></>
    )
  };
};

export default Evolution;