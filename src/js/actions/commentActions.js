import axios from 'axios';

export function fetchComments() {
    return function(dispatch) {
        dispatch({type: "FETCH_COMMENTS"});

        axios.get('http://jsonplaceholder.typicode.com/comments')
            .then(response => {
                dispatch({type: "FETCH_COMMENTS_FULFILLED", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "FETCH_COMMENTS_REJECTED", payload: error})
            })
    }
}

export function fetchComment() {
    return function(dispatch) {
        dispatch({type: "FETCH_COMMENT"});

        const commentId = window.location.pathname.substr(10);
        axios.get(`http://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then(response => {
                dispatch({type: "FETCH_COMMENT_FULFILLED", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "FETCH_COMMENT_REJECTED", payload: error})
            })
    }
}