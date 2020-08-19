export default function reducer(state={
    comment: {
        postId: null,
        id: null,
        name: null,
        email: null,
        body: null
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_COMMENTS":
        case "FETCH_COMMENT":
            return {...state, fetching: true};

        case "FETCH_COMMENTS_FULFILLED":
        case "FETCH_COMMENT_FULFILLED": 
            return {
                ...state,
                comment: action.payload,
                fetching: false,
                fetched: true
            };

        case "FETCH_COMMENTS_REJECTED":
        case "FETCH_COMMENTS_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }

    }
    return state
}