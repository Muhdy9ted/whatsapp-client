import React from 'react';

import './App.css';
import {Chat} from './components';
import {Sidebar} from './components';


function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
