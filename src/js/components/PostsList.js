import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from '../components/Comment';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { fetchComments } from '../actions/commentActions';

import Post from './Post';

class PostsList extends Component {
    render() {

        const { posts, users, comments } = this.props;

        if(!posts.length) {
            return null;
        }

        const postList = posts.map(post => {
            if(!users.length || !comments.length) {
                return null
            }

            const user = users.find(user => {
                return user.id === post.userId
            })

            const commentsToPost = comments.filter(comment => {
                return comment.postId === post.id;
            }).map(comment => {
                return <Comment key={comment.id} {...comment} />
            })


            return <Post key={post.id} {...post} username={user.username} comments={commentsToPost.length} commentsList={commentsToPost}/>
        })

        return (
            <div>
                <h1>Посты</h1>
                {postList}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts());
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchComments());
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post.post,
        users: state.user.user,
        comments: state.comment.comment
    }
}

export default connect(mapStateToProps)(PostsList);
