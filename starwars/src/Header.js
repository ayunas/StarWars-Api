import React from 'react'
// import Loader from 'react-loader-spinner';
import './App.scss';
import StarWarsLogo from './images/star-wars-logo.png';

function Header() {
  return (
    <header className="App-header">
        {/* <Loader type="Grid" color="white" />   */}
        {/* <h2> SWAPI </h2> */}
        <a href='https://swapi.co' target='_blank'><img className='starwars' src={StarWarsLogo} /></a>
    </header>
  )
}

export default Header;
