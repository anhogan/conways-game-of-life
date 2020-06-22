import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_COLUMNS, CHANGE_ROWS, CHANGE_INTERVAL } from '../actions/index';

import Cell from './Cell';

import { RowDiv, GridDiv } from './Styles';

const Grid = (props) => {
  const renderGrid = () => {
    var grid = []
    var row = []
  
    for (let i = 0; i < props.size[0]; i++) {
      for (let j = 0; j < props.size[1]; j++) {
        row.push(<Cell key={[i, j]} />)
      };
  
      grid.push(<RowDiv key={i}>{row}</RowDiv>)
      row = []
    };
  
    return grid;
  };
  
  const handleColumnChange = (e) => (dispatch) => {
    if (!props.running) {
      var size = props.size;
      size[0] = e.target.value;
  
      dispatch({ type: CHANGE_COLUMNS, payload: size });
  
      renderGrid();
    };
  };
  
  const handleRowChange = (e) => (dispatch) => {
    if (!props.running) {
      var size = props.size;
      size[1] = e.target.value;
  
      dispatch({ type: CHANGE_ROWS, payload: size });
  
      renderGrid();
    };
  };

  const handleIntervalChange = (e) => (dispatch) => {
    var speed = e.target.value
    dispatch({ type: CHANGE_INTERVAL, payload: speed });
  };

  return (
    <div>
      <h4>Generation: </h4>
      <GridDiv>
        {renderGrid()}
      </GridDiv>
      <div>
        <div>
          <label>Columns</label>
          <input
            type="text"
            value={props.size[0]}
            onChange={handleColumnChange()} />
        </div>
        <div>
          <label>Rows</label>
          <input
            type="text"
            value={props.size[1]}
            onChange={handleRowChange()} />
        </div>
        <div>
          <label>Animation Speed</label>
          <input
            type="text"
            value={props.interval}
            onChange={handleIntervalChange()} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    size: state.size,
    running: state.running,
    interval: state.interval
  }
};

export default connect(mapStateToProps, {})(Grid);