import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) {
        dispatch({type: "FETCH_USERS"});

        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "FETCH_USERS_REJECTED", payload: error})
            })
    }
}


export function fetchUser() {
    return function(dispatch) {
        dispatch({type: "FETCH_USER"});

        const userId = window.location.pathname.substr(7);

        axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
            })
            .catch(error => { 
                dispatch({type: "FETCH_USER_REJECTED", payload: error})
            })
    }
}

export function setUserName() {
    return {
        type: "SET_USER_NAME",
        payload: name
    }
}

export function setUserPhone() {
    return {
        type: "SET_USER_PHONE",
        payload: phone
    }
}