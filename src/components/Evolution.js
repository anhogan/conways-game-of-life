import React, { Component } from 'react';

class Evolution extends Component {
  // TODO: condense into one Map of cells with a state to manage alive / dead
  state = {
    liveCells: new Map(),
    deadCells: new Map(),
    nextGeneration: new Map()
  };

  addCell = (cell) => {
    this.state.liveCells.set(`${cell.x}, ${cell.y}`, { x: cell.x, y: cell.y });
  };

  removeCell = (cell) => {
    this.state.liveCells.delete(cell);
  };

  isAlive = (key) => {
    return this.state.liveCells.has(key);
  };

  setCellState = (cell) => {
    if (this.isAlive(`${cell.x}, ${cell.y}`)) {
      this.removeCell(`${cell.x}, ${cell.y}`);
    } else {
      this.addCell(`${cell.x}, ${cell.y}`);
    };

    return new Evolution(0, this.state.liveCells);
  };

  // TODO: condense into one function
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
    return(
      <div>

      </div>
    )
  }
};

export default Evolution;