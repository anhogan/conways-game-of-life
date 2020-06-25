import React, { Component } from 'react';

import { UserButtons, BottomUserButtons, ButtonContainer, TopButtonDiv, BottomButtonDiv } from './Styles';

class BoardControls extends Component {
  render() {
    return (
      <div>
        <ButtonContainer>
          <TopButtonDiv>
            <UserButtons onClick={this.props.startGame}>Start</UserButtons>
            <UserButtons onClick={this.props.stopGame}>Stop</UserButtons>
            <UserButtons onClick={this.props.clearGrid}>Clear</UserButtons>
          </TopButtonDiv>
          <BottomButtonDiv>
            <BottomUserButtons onClick={this.props.randomConfig}>Random</BottomUserButtons>
            <BottomUserButtons onClick={this.props.advanceGeneration}>Next Generation</BottomUserButtons>
          </BottomButtonDiv>
        </ButtonContainer>
      </div>
    );
  };
};

export default BoardControls;