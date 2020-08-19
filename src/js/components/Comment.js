import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Comment extends Component {
    render() {
        return (
            <div className="card mb-3">
                <Link to={`/comments/${this.props.id}`} className="card-header">{this.props.name}</Link>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{this.props.body}</p>
                        <footer className="blockquote-footer">{this.props.email}</footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}