import React from 'react';
import './App.scss';
import Loader from 'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Loader type="Grid" color="white" />  
          <h2>Star Wars SWAPI </h2>
      </header>
    </div>
  );
}

export default App;