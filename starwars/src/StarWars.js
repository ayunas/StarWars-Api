import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

function StarWars(props) {
    return (
           <>
                { props.fetch && 
                <div>
                    <span>Loading... Please Wait...</span> 
                    <Loader type="Circles" color="navy"/>
                </div> 
                }
                
                { props.starwars.map( jedi => {
                        return <div>{jedi.name}</div>
                        }
                    )
                }
           </>
    )   
}

function mapStateToProps(state) {
    return {
      starwars : state.starwars,
      error : state.error,
      fetch : state.fetch
    }
  }

export default connect(mapStateToProps,null)(StarWars);