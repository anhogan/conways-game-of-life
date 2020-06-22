import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/index';

import Grid from './Grid';
import BoardControls from './BoardControls';
import Rules from './Rules';

import { RulesButton } from './Styles';

const GameBoard = (props) => {
  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <RulesButton onClick={() => props.openModal()}>Rules</RulesButton>
      <Grid />
      <BoardControls />
      <Rules />
    </div>
  );
};

export default connect(null, { openModal })(GameBoard);