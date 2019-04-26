import axios from 'axios';


function fetchStarWars(url) {
    
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

