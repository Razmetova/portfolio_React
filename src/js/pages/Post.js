import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostView from '../components/Post';
import Comment from '../components/Comment';
import { fetchPost } from '../actions/postActions';
import { fetchUser } from '../actions/userActions';
import { fetchComment } from '../actions/commentActions';

class Post extends Component {
    render() {
        const { post, comments } = this.props;

        if(!comments.length) {
            return null
        }

        const commentsToPost = comments.filter(comment => {
            return comment.postId === post.id;
        }).map(comment => {
            return <Comment key={comment.id} {...comment} />
        })

        return (
            <div>
                <br/>
                {this.props.post && 
                <PostView {...this.props.post} username={this.props.user.username} comments={commentsToPost.length} commentsList={commentsToPost}/>}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchPost());
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchComment());
    }
}

function mapStateToProps(state) {
    return {
        post: state.post.post,
        user: state.user.user,
        comments: state.comment.comment
    }
}

export default connect(mapStateToProps)(Post);