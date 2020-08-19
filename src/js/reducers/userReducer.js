export default function reducer(state={
    user: {
        id: null,
        name: null,
        username: null,
        email: null,
        phone: null,
        website: null
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_USERS":
        case "FETCH_USER":
            return {...state, fetching: true};
        
        case "FETCH_USERS_FULFILLED":
        case "FETCH_USER_FULFILLED":
            return {
                ...state,
                user: action.payload,
                fetching: false,
                fetched: true
            };

        case "FETCH_USERS_REJECTED":
        case "FETCH_USER_REJECTED":
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            };

        case "SET_USER_NAME": 
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            };

        case "SET_USER_PHONE":
            return {
                ...state,
                user: {
                    ...state.user,
                    phone: action.payload
                }
            }
    }
    return state;
}