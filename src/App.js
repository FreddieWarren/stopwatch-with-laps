import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Stopwatch } from './stopwatch';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Stopwatch />
    </div>
  );
}
}

export default App;
