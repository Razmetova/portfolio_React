import React, { Component } from 'react';
import UserProfile from '../components/User';

import { connect } from 'react-redux';

import Post from '../components/Post';
import Comment from '../components/Comment';
import { fetchUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';
import { fetchComments } from '../actions/commentActions';

class User extends Component {
    render() {
        const { user, posts, comments } = this.props;

        if(!posts.length || !comments.length) {
            return null;
        }

        const filteredPosts = posts.filter(post => {
            return post.userId === user.id
        })

        
        const userPosts = filteredPosts.map(post => {
            if(!comments.length) {
                return null
            }

            const commentsToPosts = comments.filter(comment => {
                return post.id === comment.postId
            }).map(comment => {
                return <Comment key={comment.id} {...comment} />
            })

            return <Post key={post.id} {...post} username={user.username} comments={commentsToPosts.length} commentsList={commentsToPosts}/>
        })

        return (
            <div>
                <br />
                {user && <UserProfile {...user} posts={userPosts}/>}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchPosts());
        this.props.dispatch(fetchComments());
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        posts: state.post.post,
        comments: state.comment.comment
    }
}

export default connect(mapStateToProps)(User);
