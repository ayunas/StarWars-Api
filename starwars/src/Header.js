import React from 'react'
import Loader from 'react-loader-spinner';

function Header() {
  return (
    <header className="App-header">
        <Loader type="Grid" color="white" />  
        <h2>Star Wars SWAPI </h2>
    </header>
  )
}

export default Header;
