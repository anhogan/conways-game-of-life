import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameBoard from './components/GameBoard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
      </div>
    );
  }
}

export default connect(null, {})(App);