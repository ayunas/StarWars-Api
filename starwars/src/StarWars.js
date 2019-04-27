import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import Sound from 'react-sound';
import lightsaber from './lightsaber.mp3';
import hum from './Hum.mp3';


function beam() {
    console.log('you have beamed');
    const beam = new Audio(lightsaber);
    beam.play();
}

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
                            <img onClick={beam} src={urls[i][0]} />
                            <Sound 
                                url={hum} 
                                playStatus={Sound.status.PLAYING} 
                                playFromPosition={0} 
                                volume={10}
                            />
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