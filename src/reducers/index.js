import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CLEAR_GRID,
  CHANGE_COLUMNS,
  CHANGE_ROWS,
  CHANGE_INTERVAL,
  START_GAME,
  STOP_GAME,
  RUN_GAME
} from '../actions/index';

const initialState = {
  open: false,
  size: [25, 25],
  running: false,
  interval: 50
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        open: false
      }
    case CLEAR_GRID:
      return {
        ...state
      }
    case CHANGE_COLUMNS:
      return {
        ...state,
        size: [action.payload]
      }
    case CHANGE_ROWS:
      return {
        ...state,
        size: [action.payload]
      }
    case CHANGE_INTERVAL:
      return {
        ...state,
        interval: action.payload
      }
    case START_GAME:
      return {
        ...state,
        running: true
      }
    case STOP_GAME:
      return {
        ...state,
        running: false
      }
    case RUN_GAME:
      return {
        ...state
      }
    default:
      return state
  };
};