import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentView from '../components/Comment';
import { fetchComment } from '../actions/commentActions';

class Comment extends Component {
    render() {
        return (
            <div>
                <br />
                {this.props.comment && <CommentView {...this.props.comment} />}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchComment());
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment.comment
    }
}

export default connect(mapStateToProps)(Comment);
