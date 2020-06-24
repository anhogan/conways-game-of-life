import React, { Component } from 'react';

import Cell from './Cell';
import InputBoxes from './InputBoxes';
import BoardControls from './BoardControls';

import { ContentContainerDiv, GridColumnDiv, ActionColumnDiv, GridDiv, GenerationText, InputContainer } from './Styles';

class Grid extends Component {
  constructor() {
      super();
      this.rows = this.state.gridHeight / this.state.cellSize;
      this.columns = this.state.gridWidth / this.state.cellSize;

      this.grid = this.renderGrid();
  }

  state = {
    gridHeight: 600,
    gridWidth: 600,
    cellGrid: [],
    cellSize: 24,
    running: false,
    interval: 1000,
    generation: 0
  };

  // Create a grid where all states are toggles to dead
  renderGrid = () => {
    var grid = [];

    for (let y = 0; y < this.rows; y++) {
      grid[y] = [];
      for (let x = 0; x < this.columns; x++) {
        grid[y][x] = false;
      };
    };

    return grid;
  };

  // Set cell state for each cell in the grid
  renderCellState = () => {
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

  toggleCellState = (e) => {    
    if (!this.state.running) {
      var clickPosition = this.gridRef.getBoundingClientRect();
      var positionX = e.clientX - clickPosition.left - 1;
      // Account for vertical scroll by adding pageYOffset
      var positionY = e.clientY - (clickPosition.top + window.pageYOffset) - 1;
  
      // Divide by cell size to get (x, y) coordinates in grid
      var x = Math.floor(positionX / this.state.cellSize);
      var y = Math.floor(positionY / this.state.cellSize);
  
      // Check for valid cell in grid
      if (x >= 0 && x < this.columns) {
        if (y >= 0 && y < this.rows) {
          this.grid[y][x] = !this.grid[y][x];
        };
      };
  
      // Re-render cells with updated state values
      this.setState({ cellGrid: this.renderCellState() });
    };
  };

  // TODO: refactor calculate neighbors without options array
  // For each cell, check neighbor state to determine if it lives or dies
  calculateNeighbors = (grid, x, y) => {
    var liveNeighbors = 0;
    // Possible surrounding cell combinations - excludes current cell
    var options = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

    for (let i = 0; i < options.length; i++) {
      var checkOptions = options[i];
      var y1 = y + checkOptions[0];
      var x1 = x + checkOptions[1];

      // Check for valid cell in grid
      if (x1 >= 0 && x1 < this.columns) {
        if (y1 >= 0 && y1 < this.rows) {
          if (grid[y1][x1]) {
            liveNeighbors++;
          }
        }
      }
      // if (x1 >= 0 && x1 < this.columns && y1 >= 0 && y1 < this.rows && grid[y1][x1]) {
      //   liveNeighbors++;
      // };
    };

    return liveNeighbors;
  };

  runGame = () => {
    // Start with an empty grid to calculate next state
    var newGrid = this.renderGrid();

    // Loop through 2D array to check each cell
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
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
    this.setState({ cellGrid: this.renderCellState() });
    this.setState({ generation: this.state.generation + 1 });
  };

  // Step through the animation one generation at a time
  advanceGeneration = () => {
    if (!this.state.running) {
      this.runGame();
    };
  };

  startGame = () => {
    if (!this.state.running) {
      this.setState({ running: true }, () => {
        this.intervalTimeout = setInterval(() => this.runGame(), this.state.interval)
      });
    };
  };

  stopGame = () => {
    this.setState({ running: false }, () => {
      if (this.intervalTimeout) {
        clearInterval(this.intervalTimeout)
      }
    });
  };

  clearGrid = () => {
    this.grid = this.renderGrid();
    this.setState({ cellGrid: this.renderCellState() });
    this.setState({ generation: 0 });
  };

  randomConfig = () => {
    if (!this.state.running) {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.columns; x++) {
          this.grid[y][x] = (Math.random() >= 0.5);
        };
      };
  
      this.setState({ cellGrid: this.renderCellState() });
    };
  };

  handleCellSizeChange = (e) => {
    if (!this.state.running) {
      this.setState({ cellSize: e.target.value });
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
                width: this.state.gridWidth,
                height: this.state.gridHeight,
                backgroundSize: `${this.state.cellSize}px ${this.state.cellSize}px`
              }}
              onClick={this.toggleCellState}
              ref={(grid) => { this.gridRef = grid }}>
              {this.state.cellGrid.map(cell => (
                <Cell 
                  key={`${cell.x}, ${cell.y}`} 
                  x={cell.x} 
                  y={cell.y} 
                  cellSize={this.state.cellSize}/>
              ))}
            </GridDiv>
          </GridColumnDiv>
          <ActionColumnDiv>
            <GenerationText>Generation: {this.state.generation}</GenerationText>
            <InputContainer>
              <InputBoxes cellSize={this.state.cellSize} interval={this.state.interval} handleCellSizeChange={this.handleCellSizeChange} handleIntervalChange={this.handleIntervalChange} />
            </InputContainer>
            <BoardControls startGame={this.startGame} stopGame={this.stopGame} clearGrid={this.clearGrid} randomConfig={this.randomConfig} advanceGeneration={this.advanceGeneration} />
          </ActionColumnDiv>
        </ContentContainerDiv>
      </div>
    );
  };
};

export default Grid;