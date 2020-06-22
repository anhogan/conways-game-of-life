import React, { Component } from 'react';

import { CellDiv } from './Styles';

class Cell extends Component {
  render() {
    return (
      <CellDiv className={this.props.live ? 'cellAlive' : 'cellDead'}></CellDiv>
    );
  };
};

export default Cell;