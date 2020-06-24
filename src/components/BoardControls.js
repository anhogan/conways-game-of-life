import React, { Component } from 'react';

import { UserButtons, ButtonDiv } from './Styles';

class BoardControls extends Component {
  render() {
    return (
      <div>
        <ButtonDiv>
          <UserButtons onClick={this.props.startGame}>Start</UserButtons>
          <UserButtons onClick={this.props.stopGame}>Stop</UserButtons>
          <UserButtons onClick={this.props.clearGrid}>Clear</UserButtons>
          <UserButtons onClick={this.props.randomConfig}>Random</UserButtons>
          <UserButtons onClick={this.props.advanceGeneration}>Next Generation</UserButtons>
        </ButtonDiv>
      </div>
    );
  };
};

export default BoardControls;