

function rootReducer(state = {starwars : []}, action) {

    switch (action.type) {
        case "FETCH": 
            return {
                ...state,
                fetch: true
            }
        case "SUCCESS":
            return {
                ...state
            }
        
        case "ERROR":
            return {
                ...state
            }

        default: 
            return state;
    }
}

export default rootReducer;

