import React from 'react';
import './App.scss';
import Header from './Header';
import StarWars from './StarWars';
import {connect} from 'react-redux';
import {fetchStarWars} from './actions';

class App extends React.Component {


  componentDidMount() {
    this.props.fetchStarWars();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <StarWars />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    starwars : state.starwars
  }

}

export default connect(mapStateToProps,{fetchStarWars})(App);