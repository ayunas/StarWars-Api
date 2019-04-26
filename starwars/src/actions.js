import axios from 'axios';


export function fetchStarWars(url) {
    console.log('fetchStarWars triggered. may the force be with you');
    
    return (dispatch) => {

        dispatch({type: "FETCH"});
        axios.get(url)
        .then( res => {
            console.log(res.data);
            dispatch({type: "SUCCESS"});
        })
        .catch( err => {
            console.log(err);
            dispatch({type: "ERROR"})
        })
    }
}

