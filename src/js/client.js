import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';

import store from './store';

import Layout from './components/Layout';
import Main from './pages/Main';
import User from './pages/User';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Comments from './pages/Comments';
import Comment from './pages/Comment';
import PageNotFound from './pages/PageNotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Main} />
                <Route path='users' component={Users}>
                    <Route path=':userId' component={User} />
                </Route>
                <Route path='posts' component={Posts}>
                    <Route path=':postId' component={Post} />
                </Route>
                <Route path='comments' component={Comments}>
                    <Route path=':commentId' component={Comment} />
                </Route>
                <Route path='*' component={PageNotFound} />
            </Route>
        </Router>
    </Provider>,
document.querySelector('#root'));




