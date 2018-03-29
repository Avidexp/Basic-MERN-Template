import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/app';

import { composeWithDevTools } from 'redux-devtools-extension';





ReactDOM.render(
    <App />
  , document.getElementById('root'));
