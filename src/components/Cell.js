import React, { Component } from 'react';

import { CellDiv } from './Styles';

class Cell extends Component {
  render() {
    return (
      <CellDiv className={this.props.live ? 'cellAlive' : 'cellDead'} onClick={() => this.props.storeCell(this.props.position)}></CellDiv>
    );
  };
};

export default Cell;