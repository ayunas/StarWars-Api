import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import StarWars from './StarWars';
import {connect} from 'react-redux';
import {fetchStarWars} from './actions';
import vader from './images/vader.jpg';
import r5d4 from './images/R5D4.png';
import obiwan from './images/obiwan.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatars : [
        {luke : 'http://bit.ly/2UBNs2h'},
        {c3po : 'http://bit.ly/2DARP81'},
        {r2d2 : 'http://bit.ly/2PwSk7H'},
        {vader},
        {leia : 'http://bit.ly/2DzE21g'},
        {owen : 'http://bit.ly/2GFq8LN'},
        {beru : 'http://bit.ly/2PwSV9r'},
        {r5d4},
        {biggs: 'http://bit.ly/2PysXCK'},
        {obiwan}
    ]
    }

  }

  componentDidMount() {
    this.props.fetchStarWars('https://swapi.co/api/people/');
  }

  render() {
    return (
      <>
        <Header className='header' />
        <div className="App">
          <StarWars avatars={this.state.avatars}/>
        </div>
        <Footer/>
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    starwars : state.starwars
  }

}

export default connect(mapStateToProps,{fetchStarWars})(App);