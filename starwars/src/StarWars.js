import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

function StarWars(props) {
    console.log(props.avatars);
    return (
           <>
                { props.fetch && 
                <div>
                    <span>Loading... Please Wait...</span> 
                    <Loader type="Circles" color="navy"/>
                </div> 
                }
                
                { props.starwars.map( jedi => {
                        return (
                        <div className='jedi'>
                            <img src={props.avatars[0].luke} />
                            <p>{jedi.name}</p>
                            <p>Height: {jedi.height}</p>
                            <p>Skin-Color: {jedi.skin_color}</p>
                            {/* <p>Vehicle: {jedi.vehicles[0]}</p> */}
                        </div>
                        )
                    })
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