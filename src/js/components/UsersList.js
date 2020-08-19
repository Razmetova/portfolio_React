import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/userActions';
import User from './User';

class UsersList extends React.Component {
    render() {
        if(!this.props.users.length) {
            return null;
        }

        const users = this.props.users.map(user => {
            return <User key={user.id} {...user} />
        })
        
        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.user
    }
}

export default connect(mapStateToProps)(UsersList);