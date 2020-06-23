import React, { Component } from 'react';

import { CellDivLive, CellDivDead } from './Styles';

// TODO: set state on the cell itself for alive and dead, then loop through each row and check for live = true?
// Move to parent component
class Cell extends Component {
  state = {
    live: false
  };

  toggleState = () => {
    if (this.state.live) {
      this.setState({ live: false });
    } else {
      this.setState({ live: true });
    };
  };

  render() {
    if (this.state.live) {
      return (
        <CellDivLive onClick={this.toggleState}></CellDivLive>
      );
    } else {
      return (
        <CellDivDead onClick={this.toggleState}></CellDivDead>
      );
    }
  };
};

export default Cell;