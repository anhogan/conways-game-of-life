import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rules extends Component {
  closeModal = (e) => {
    this.props.closeModal && this.props.closeModal(e)
  };

  render() {
    if (!this.props.open) {
      return null
    };

    return (
      <div class="rulesModal">
        <h3>Game of Life Rules</h3>
        <p>The universe of the Game of Life consists of a two-dimensional grid containing square cells with one of two possible states: live or dead. Each cell has eight neighbors on the left, right, up, down, and diagonals. During the animation, cell transitions occur based on the following rules:</p>
        <ul>
          <li>Any cell with two or three live neighbors survives</li>
          <li>Any dead cell with three live neighbors becomes a live cell</li>
          <li>Any live cell with less than two live neighbors, or more than three live neighbors, dies</li>
        </ul>
        <p>To play, create an initial pattern on the grid, then click Start to watch the life cycle evolve. Alternatively, use the Random button to generate a random starting configuration of cells, or choose from a predefined configuration.</p>
        <p>Use the speed boxes to determine how fast, or slow, the animation will play. To see a configuration at a certain generation, hit the Stop button. Use the Clear button to restart.</p>
        <button onClick={this.closeModal}>Play</button>
      </div>
    );
  }
}

export default connect(null, {})(Rules);