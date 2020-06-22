import React from 'react';
import { connect } from 'react-redux';

import GameBoard from './components/GameBoard';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
};

export default connect(null, {})(App);