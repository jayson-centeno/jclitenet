/// <reference path="typings/require/require.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />
/// <reference path="typings/react-router/react-router.d.ts" />
/// <reference path="typings/react-router/history.d.ts" />
/// <reference path="typings/react-redux/react-redux.d.ts" />
/// <reference path="typings/react-router-redux/react-router-redux-2.x.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'

import App from 'App'
import Home from 'components/home/index'
import Login from 'components/login/login'
import Registration from 'components/registration/registration'
import WelcomeLayout from 'components/welcome/welcome'

import reducers from "reducers/reducers"

let store = createStore(reducers)


let NoMatch = []


ReactDOM.render((
    <Provider store={store}> 
        <Router history={browserHistory}>
            <Route path="/" component={WelcomeLayout}>
                <IndexRoute component={Login} />
                <Route path="register" component={Registration} />
            </Route>
            <Route path="/profile" component={App} >
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
), document.body)