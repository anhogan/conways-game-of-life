import React, { Component } from 'react';

import Grid from './Grid';
import Rules from './Rules';

import { RulesButton } from './Styles';

class GameBoard extends Component {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <RulesButton onClick={this.openModal}>Rules</RulesButton>
        <Grid />
        <Rules open={this.state.open} closeModal={this.closeModal} />
      </div>
    );
  };
};

export default GameBoard;