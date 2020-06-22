import React from 'react';
import { connect } from 'react-redux';
import { startGame, stopGame, clearGrid } from '../actions/index';

const BoardControls = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.startGame()}>Start</button>
        <button onClick={props.stopGame()}>Stop</button>
        <button onClick={props.clearGrid()}>Clear</button>
      </div>
    </div>
  );
};

export default connect(null, { startGame, stopGame, clearGrid })(BoardControls);