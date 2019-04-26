import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

function StarWars(props) {
    console.log('avatars props: ' , props.avatars);
    const urls = props.avatars.map( jedi => Object.values(jedi) );

    return (
           <>
                { props.fetch && 
                <div>
                    <span>Loading... Please Wait...</span> 
                    <Loader type="Circles" color="navy"/>
                </div> 
                }
                
                { props.starwars.map( (jedi,i) => {
                        return (
                        <div className='jedi'>
                            <img src={urls[i][0]} />
                            <div>
                                <h4><strong>{jedi.name}</strong></h4>
                                <p>Height: {jedi.height}</p>
                                <p>Skin-Color: {jedi.skin_color}</p>
                            </div>
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