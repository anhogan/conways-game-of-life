import React, { Component } from 'react';

class BoardControls extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.startGame}>Start</button>
          <button onClick={this.props.stopGame}>Stop</button>
          <button onClick={this.props.clearGrid}>Clear</button>
        </div>
      </div>
    );
  };
};

export default BoardControls;