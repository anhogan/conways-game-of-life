// Action Variables
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const CLEAR_GRID = 'CLEAR_GRID';

export const CHANGE_COLUMNS = 'CHANGE_COLUMNS';
export const CHANGE_ROWS = 'CHANGE_ROWS';
export const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const RUN_GAME = 'RUN_GAME';

// Actions
export const openModal = () => (dispatch) => {
  dispatch({ type: OPEN_MODAL });
  console.log('Open')
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
  console.log('Close')
};

export const clearGrid = () => (dispatch) => {
  dispatch({ type: CLEAR_GRID });
};

export const startGame = () => (dispatch) => {
  dispatch({ type: START_GAME });
};

export const stopGame = () => (dispatch) => {
  dispatch({ type: STOP_GAME });
};

export const runGame = () => (dispatch) => {
  dispatch({ type: RUN_GAME });
};