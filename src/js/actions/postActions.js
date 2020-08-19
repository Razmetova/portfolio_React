import axios from 'axios';

export function fetchPosts() {
    return function(dispatch) {
        dispatch({type: "FETCH_POSTS"});

        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "FETCH_POSTS_REJECTED", payload: error})
            })
    }
}

export function fetchPost() {
    return function(dispatch) {
        dispatch({type: "FETCH_POST"});

        const postId = window.location.pathname.substr(7);
        axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                dispatch({type: "FETCH_POST_FULFILLED", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "FETCH_POST_REJECTED", payload: error})
            })
    }
}