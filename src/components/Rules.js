import React, { Component } from 'react';

import { ModalDiv } from './Styles';

class Rules extends Component {
  closeModal = (e) => {
    this.props.closeModal && this.props.closeModal(e)
  };

  render() {
    if (!this.props.open) {
      return null
    };

    return (
      <ModalDiv>
        <h2>Game of Life Rules</h2>
        <div className="content">
          <p>The universe of the Game of Life consists of a two-dimensional grid containing square cells with one of two possible states: live or dead. Each cell has eight neighbors horizontally, vertically, and diagonally. During the animation, cell transitions occur based on the following rules:</p>
          <ul>
            <li>Any cell with two or three live neighbors survives</li>
            <li>Any dead cell with three live neighbors becomes a live cell</li>
            <li>Any live cell with less than two live neighbors, or more than three live neighbors, dies</li>
          </ul>
          <p>To play, create an initial pattern on the grid, then click <strong>Start</strong> to watch the life cycle evolve. Alternatively, use the <strong>Random</strong> button to generate a random starting configuration of cells, or choose from a predefined configuration.</p>
          <p>Use the speed boxes to determine how fast, or slow, the animation will play. To see a configuration at a certain generation, hit the <strong>Stop</strong> button. Use the <strong>Clear</strong> button to restart.</p>
        </div>
        <div className="playBtn">
          <button onClick={this.closeModal}>Play</button>
        </div>
      </ModalDiv>
    );
  }
}

export default Rules;