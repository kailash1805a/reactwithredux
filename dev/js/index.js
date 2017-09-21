import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import Promise from "redux-promise-middleware";
import allReducers from "./reducers";
import thunk from 'redux-thunk';

import App from "./components/App";

const store = createStore(
    allReducers,
    applyMiddleware(thunk, Promise())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);