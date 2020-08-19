export default function reducer(state={
    post: {
        userId: null,
        id: null,
        title: null,
        body: null
    },
    fetching: false,
    fetched: false,
    error: null 
}, action) {
    switch(action.type) {
        case "FETCH_POSTS":
        case "FETCH_POST":
            return {...state, fetching: true};
        
        case "FETCH_POSTS_FULFILLED":
        case "FETCH_POST_FULFILLED":
            return {
                ...state,
                post: action.payload,
                fetching: false,
                fetched: true
            };

        case "FETCH_POSTS_REJECTED":
        case "FETCH_POST_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
    }

    return state
}