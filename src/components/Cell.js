import React from 'react';
import { connect } from 'react-redux';

import { CellDiv } from './Styles';

const Cell = () => {
  return (
    <CellDiv></CellDiv>
  );
};

export default connect(null, {})(Cell);