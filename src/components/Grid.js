import React, { Component } from 'react';

class Grid extends Component {
  renderGrid = () => {

  }

  render() {
    return (
      <div>
        <h4>Generation: </h4>
        <div>
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default Grid;