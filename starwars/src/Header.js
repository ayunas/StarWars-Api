import React from 'react'
// import Loader from 'react-loader-spinner';
import './App.scss';


function Header() {
  return (
    <header className="App-header">
        {/* <Loader type="Grid" color="white" />   */}
        {/* <h2> SWAPI </h2> */}
        <a href='https://swapi.co' target='_blank'><img className='starwars' src='http://bit.ly/2IIuqWk' /></a>
    </header>
  )
}

export default Header;
