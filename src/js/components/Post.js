import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        return this.setState({show: !this.state.show})
    }

    render() {
        return (
            <>
                <div className="card mb-3">
                    <Link to={`/posts/${this.props.id}`} className="card-header">{this.props.title}</Link>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.username}</h5>
                        <p className="card-text">{this.props.body}</p>
                        <a href="#" className="btn btn-primary" onClick={this.onClick}>Comments ({this.props.comments})</a>
                    </div>
                </div>
                {this.state.show ? 
                <div className="offset-1">
                    <h3>Комментарии</h3>
                    {this.props.commentsList}
                </div> : null}
            </>
        )
    }
}
