import React from 'react';
import './App.scss';
import Header from './Header';
import StarWars from './StarWars';
import {connect} from 'react-redux';
import {fetchStarWars} from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatars : [{luke : 'http://bit.ly/2UBNs2h'}]
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