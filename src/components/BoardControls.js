import React, { Component } from 'react';

class BoardControls extends Component {
  handleColumnChange = (e) => {

  };

  handleRowChange = (e) => {
    
  };

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

export default BoardControls;