import axios from 'axios';


export function fetchStarWars(url) {
    console.log('fetchStarWars triggered. may the force be with you');

    return (dispatch) => {

        dispatch({type: "FETCH"});
        axios.get(url)
        .then( res => {
            console.log("response from the API call: ", res.data.results);
            dispatch({type: "SUCCESS", payload: res.data.results});
        })
        .catch( err => {
            console.log(err);
            dispatch({type: "ERROR"})
        })
    }
}

