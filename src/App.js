import React, { Component } from 'react';
import './App.css';
import WindowDimensions from './WindowDimensions';
import DataFetch from './DataFetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bluebberry React Hooks Workshop</h1>
        </header>
        <WindowDimensions />
        <DataFetch />
      </div>
    );
  }
}

export default App;
