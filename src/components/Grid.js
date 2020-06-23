import React, { Component } from 'react';

import { cellSize, gridWidth, gridHeight } from '../config/grid_variables';

import Cell from './Cell';
import BoardControls from './BoardControls';

import { ContentContainerDiv, GridColumnDiv, ActionColumnDiv, GridDiv, GenerationText, InputContainer, InputDiv, Inputs, Labels } from './Styles';

class Grid extends Component {
  // Specify how many rows and columns will be appear on the grid
  constructor() {
      super();
      this.rows = gridHeight / cellSize;
      this.columns = gridWidth / cellSize;

      this.grid = this.renderEmptyGrid();
  }

  state = {
    cellGrid: [],
    running: false,
    size: cellSize,
    interval: 1000,
    generation: 0
  };

  // Clear the grid of all active cells
  renderEmptyGrid = () => {
    var grid = [];
    var rows;
    var columns;

    if (this.state.size !== cellSize) {
      rows = gridHeight / this.state.size;
      columns = gridWidth / this.state.size;
    } else {
      rows = this.rows;
      columns = this.columns;
    };

    for (let y = 0; y < rows; y++) {
      grid[y] = [];
      for (let x = 0; x < columns; x++) {
        grid[y][x] = false;
      };
    };

    return grid;
  };

  // Create cells and add them to the grid at specified coordinates
  renderCells = () => {
    var cells = [];
    var rows;
    var columns;

    if (this.state.size !== cellSize) {
      rows = gridHeight / this.state.size;
      columns = gridWidth / this.state.size;
    } else {
      rows = this.rows;
      columns = this.columns;
    };
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (this.grid[y][x]) {
          cells.push({ x, y });
        };
      };
    };

    return cells;
  };

  // Determine cell clicked by window position of the mouse
  getOffset = () => {
    var rect = this.gridRef.getBoundingClientRect();
    var element = document.documentElement;

    return {
      x: (rect.left + window.pageXOffset) - element.clientLeft - 1,
      y: (rect.top + window.pageYOffset) - element.clientTop - 1
    };
  };

  // If cell is clicked, toggle its state
  toggleCellState = (e) => {
    var rows;
    var columns;

    if (this.state.size !== cellSize) {
      rows = gridHeight / this.state.size;
      columns = gridWidth / this.state.size;
    } else {
      rows = this.rows;
      columns = this.columns;
    };
    
    if (!this.state.running) {
      var offset = this.getOffset();
      var offsetX = e.clientX - offset.x - 1;
      var offsetY = e.clientY - offset.y - 1;
  
      var x = Math.floor(offsetX / cellSize);
      var y = Math.floor(offsetY / cellSize);
  
      // Toggle state if cell is within grid
      if (x >= 0 && x < columns && y >= 0 && y <= rows) {
        this.grid[y][x] = !this.grid[y][x];
      };
  
      // Re-render cells with updated state values
      this.setState({ cellGrid: this.renderCells() });
    };
  };

  // For each cell, check neighbor state to determine if it lives or dies
  calculateNeighbors = (grid, x, y) => {
    var liveNeighbors = 0;
    // Possible surrounding cell combinations - excludes current cell
    var surrounding = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    var rows;
    var columns;

    if (this.state.size !== cellSize) {
      rows = gridHeight / this.state.size;
      columns = gridWidth / this.state.size;
    } else {
      rows = this.rows;
      columns = this.columns;
    };

    for (let i = 0; i < surrounding.length; i++) {
      var checkSurrounding = surrounding[i];
      var y1 = y + checkSurrounding[0];
      var x1 = x + checkSurrounding[1];

      // If valid cell and grid at the neighbor cell is alive, add one to neighbors
      if (x1 >= 0 && x1 < columns && y1 >= 0 && y1 < rows && grid[y1][x1]) {
        liveNeighbors++;
      };
    };

    return liveNeighbors;
  };

  runGame = () => {
    // Start with an empty grid to calculate next state
    var newGrid = this.renderEmptyGrid();
    var rows;
    var columns;

    if (this.state.size !== cellSize) {
      rows = gridHeight / this.state.size;
      columns = gridWidth / this.state.size;
    } else {
      rows = this.rows;
      columns = this.columns;
    };

    // Loop through 2D array to check each cell
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        var neighbors = this.calculateNeighbors(this.grid, x, y);

        // If cell is live, check if 2, or 3, neighbors are also live
        if (this.grid[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newGrid[y][x] = true;
          } else {
            newGrid[y][x] = false;
          };
        } else {
          // If cell is dead and has 3 live neighbors, make it live
          if (!this.grid[y][x] && neighbors === 3) {
            newGrid[y][x] = true;
          };
        };
      };
    };

    // Set current state to new state
    this.grid = newGrid;
    // Re-render cells based on updated state
    this.setState({ cellGrid: this.renderCells() });
    // Advance generation
    this.setState({ generation: this.state.generation + 1 });

    // Set animation speed based on interval state
    this.intervalTimeout = window.setTimeout(() => {
      this.runGame();
    }, this.state.interval);
  };

  // Invoke the run game function
  startGame = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.runGame();
    };
  };

  stopGame = () => {
    this.setState({ running: false });
    if (this.intervalTimeout) {
      window.clearTimeout(this.intervalTimeout);
      this.intervalTimeout = null;
    }
  };

  // Set all cell states to dead and generation to 0
  clearGrid = () => {
    this.grid = this.renderEmptyGrid();
    this.setState({ cellGrid: this.renderCells() });
    this.setState({ generation: 0 });
  };

  randomConfig = () => {
    if (!this.state.running) {
      var rows;
      var columns;
  
      if (this.state.size !== cellSize) {
        rows = gridHeight / this.state.size;
        columns = gridWidth / this.state.size;
      } else {
        rows = this.rows;
        columns = this.columns;
      };

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          this.grid[y][x] = (Math.random() >= 0.5);
        };
      };
  
      this.setState({ cellGrid: this.renderCells() });
    };
  };

  handleCellSizeChange = (e) => {
    if (!this.state.running) {
      this.setState({ size: e.target.value });
      this.renderEmptyGrid();
    };
  };

  handleIntervalChange = (e) => {
    if (!this.state.running) {
      this.setState({ interval: e.target.value });
    };
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
                <Labels>Cell Size</Labels>
                <Inputs
                  type="text"
                  value={this.state.size}
                  onChange={this.handleCellSizeChange} />
              </InputDiv>
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