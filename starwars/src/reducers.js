

function rootReducer(state = {starwars : [], error : false}, action) {

    switch (action.type) {
        case "FETCH": 
            return {
                ...state,
                fetch: true
            }
        case "SUCCESS":
            return {
                ...state,
                starwars : action.payload,
                fetch : false
            }
        
        case "ERROR":
            return {
                ...state,
                error : true,
            }

        default: 
            return state;
    }
}

export default rootReducer;

