import React, { Component } from 'react';

class BoardControls extends Component {
  startGame = () => {

  };

  stopGame = () => {

  };

  clearGrid = () => {

  };

  randomConfig = () => {

  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.startGame}>Start</button>
          <button onClick={this.stopGame}>Stop</button>
          <button onClick={this.clearGrid}>Clear</button>
        </div>
        <div>
          <button onClick={this.randomConfig}>Random</button>
        </div>
      </div>
    );
  };
};

export default BoardControls;