import React, { Component } from 'react';

import { cellSize, gridWidth, gridHeight } from '../config/grid_variables';

import Cell from './Cell';
import BoardControls from './BoardControls';

import { ContentContainerDiv, GridColumnDiv, ActionColumnDiv, GridDiv, GenerationText, InputContainer, InputDiv, Inputs, Labels } from './Styles';

class Grid extends Component {
  constructor() {
      super();
      this.rows = gridHeight / cellSize;
      this.columns = gridWidth / cellSize;

      this.grid = this.renderEmptyGrid();
  }

  state = {
    cellGrid: [],
    running: false,
    interval: 1000,
    generation: 0
  };

  renderEmptyGrid = () => {
    var grid = [];

    for (let y = 0; y < this.rows; y++) {
      grid[y] = [];
      for (let x = 0; x < this.columns; x++) {
        grid[y][x] = false;
      };
    };

    return grid;
  };

  renderCells = () => {
    var cells = [];
    
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        if (this.grid[y][x]) {
          cells.push({ x, y });
        };
      };
    };

    return cells;
  };

  getOffset = () => {
    var rect = this.gridRef.getBoundingClientRect();
    var element = document.documentElement;

    return {
      x: (rect.left + window.pageXOffset) - element.clientLeft - 1,
      y: (rect.top + window.pageYOffset) - element.clientTop - 1
    };
  };

  toggleCellState = (e) => {
    var offset = this.getOffset();
    var offsetX = e.clientX - offset.x - 1;
    var offsetY = e.clientY - offset.y - 1;

    var x = Math.floor(offsetX / cellSize);
    var y = Math.floor(offsetY / cellSize);

    if (x >= 0 && x < this.columns && y >= 0 && y <= this.rows) {
      this.grid[y][x] = !this.grid[y][x];
    };

    this.setState({ cellGrid: this.renderCells() });
  };

  /**
   * Calculate state of neighbors at point (x, y)
   * @param {Array} grid
   * @param {int} x
   * @param {int} y
   */
  calculateNeighbors = (grid, x, y) => {
    var neighbors = 0;
    var surrounding = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

    for (let i = 0; i < surrounding.length; i++) {
      var checkSurrounding = surrounding[i];
      var y1 = y + surrounding[0];
      var x1 = x + surrounding[1];

      if (x1 >= 0 && x1 <= this.columns && y1 >= 0 && y1 <= this.rows && grid[y1][x1]) {
        neighbors++;
      };
    };

    return neighbors;
  };

  runGame = () => {
    var newGrid = this.renderEmptyGrid();

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        var neighbors = this.calculateNeighbors(this.grid, x, y);

        if (this.grid[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newGrid[y][x] = true;
          } else {
            newGrid[y][x] = false;
          };
        } else {
          if (!this.grid[y][x] && neighbors === 3) {
            newGrid[y][x] = true;
          };
        };
      };
    };

    this.grid = newGrid;
    this.setState({ cellGrid: this.renderCells() });
    this.setState({ generation: this.state.generation + 1 });

    this.intervalTimeout = window.setTimeout(() => {
      this.runGame();
    }, this.state.interval);
  };

  startGame = () => {
    this.setState({ running: true });
    this.runGame();
  };

  stopGame = () => {
    this.setState({ running: false });
    if (this.intervalTimeout) {
      window.clearTimeout(this.intervalTimeout);
      this.intervalTimeout = null;
    }
  };

  clearGrid = () => {
    this.grid = this.renderEmptyGrid();
    this.setState({ cellGrid: this.renderCells() });
    this.setState({ generation: 0 });
  };

  randomConfig = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        this.grid[y][x] = (Math.random() >= 0.5);
      };
    };

    this.setState({ cellGrid: this.renderCells() });
  };

  handleIntervalChange = (e) => {
    this.setState({ interval: e.target.value });
  };

  render() {
    return (
      <div>
        <ContentContainerDiv>
          <GridColumnDiv>
            <GridDiv
              style={{ 
                width: gridWidth,
                height: gridHeight,
                backgroundSize: `${cellSize}px ${cellSize}px`
              }}
              onClick={this.toggleCellState}
              ref={(game) => { this.gridRef = game }}>
              {this.state.cellGrid.map(cell => (
                <Cell key={`${cell.x}, ${cell.y}`} x={cell.x} y={cell.y} />
              ))}
            </GridDiv>
          </GridColumnDiv>
          <ActionColumnDiv>
            <GenerationText>Generation: {this.state.generation}</GenerationText>
            <InputContainer>
              <InputDiv>
                <Labels>Animation Speed</Labels>
                <Inputs
                  type="text"
                  value={this.state.interval}
                  onChange={this.handleIntervalChange} />
              </InputDiv>
            </InputContainer>
            <BoardControls startGame={this.startGame} stopGame={this.stopGame} clearGrid={this.clearGrid} randomConfig={this.randomConfig} />
          </ActionColumnDiv>
        </ContentContainerDiv>
      </div>
    );
  };
};

export default Grid;