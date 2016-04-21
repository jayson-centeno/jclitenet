/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

import Redux = require('redux');
import reducer = require('reducers/login');
var createStore = Redux.createStore;

export function createStore(reducer, initialState);