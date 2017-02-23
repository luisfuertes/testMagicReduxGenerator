// React
import React, { Component } from 'react';

//Imports
import App from './App'
import * as reducerIndex from './redux/reducerIndex'

//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducerIndex);
const store = createStoreWithMiddleware(reducer);


export default class index extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
