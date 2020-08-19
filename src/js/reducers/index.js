import { combineReducers } from 'redux';

import user from './userReducer';
import post from './postReducer';
import comment from './commentReducer';

export default combineReducers({
    user,
    post,
    comment,
})
