import React, { Component } from 'react';
import { connect } from 'react-redux';

class BoardControls extends Component {
  render() {
    return (
      <div>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <button>Clear</button>
        </div>
        <div>
          <button>Random</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(BoardControls);