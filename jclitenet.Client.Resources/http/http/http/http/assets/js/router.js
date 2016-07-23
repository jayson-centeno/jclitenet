/// <reference path="typings/require/require.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />
/// <reference path="typings/react-router/react-router.d.ts" />
/// <reference path="typings/react-router/history.d.ts" />
/// <reference path="typings/react-redux/react-redux.d.ts" />
/// <reference path="typings/react-router-redux/react-router-redux-2.x.d.ts" />
define(["require", "exports", 'react', 'react-dom', 'redux', 'react-router', 'react-redux', 'App', 'components/home/index', 'components/login/login', 'components/registration/registration', 'components/welcome/welcome', "reducers/reducers"], function (require, exports, React, ReactDOM, redux_1, react_router_1, react_redux_1, App_1, index_1, login_1, registration_1, welcome_1, reducers_1) {
    "use strict";
    var store = redux_1.createStore(reducers_1.default);
    var NoMatch = [];
    ReactDOM.render((React.createElement(react_redux_1.Provider, {store: store}, React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: welcome_1.default}, React.createElement(react_router_1.IndexRoute, {component: login_1.default}), React.createElement(react_router_1.Route, {path: "register", component: registration_1.default})), React.createElement(react_router_1.Route, {path: "/profile", component: App_1.default}, React.createElement(react_router_1.IndexRoute, {component: index_1.default}))))), document.body);
});
