import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import { fetchComments } from '../actions/commentActions';

class CommentsList extends Component {
    render() {
        if(!this.props.comments.length) {
            return null
        }

        const commentsList = this.props.comments.map(comment => {
            return <Comment key={comment.id} {...comment}/>
        })

        return (
            <div>
                <h1>Комментарии</h1>
                {commentsList}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchComments());
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comment.comment
    }
}

export default connect(mapStateToProps)(CommentsList);
