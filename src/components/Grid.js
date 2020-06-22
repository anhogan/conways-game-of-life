import React, { Component } from 'react';
import { connect } from 'react-redux';

class Grid extends Component {
  state = {
    size: [25, 25]
  }

  handleRowChange = (e) => {
    
  }

  handleColumnChange = () => {

  }

  renderGrid = () => {
    
  }

  render() {
    return (
      <div>
        <h4>Generation: </h4>
        <div>
          <div>
            <label>Rows</label>
            <input
              type="text"
              value={this.state.size[1]}
              onChange={this.handleRowChange} />
          </div>
          <div>
            <label>Columns</label>
            <input
              type="text"
              value={this.state.size[0]}
              onChange={this.handleColumnChange} />
          </div>
        </div>
        <div>
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default connect(null, {})(Grid);