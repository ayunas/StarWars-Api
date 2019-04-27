import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.scss';
import App from './App';
import rootReducer from './reducers';



ReactDOM.render(
<Provider store={createStore(rootReducer,applyMiddleware(thunk, logger))}>
    <App />
</Provider>, document.getElementById('root'));


