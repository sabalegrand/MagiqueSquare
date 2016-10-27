import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';


import * as actions from 'actions';
import configureStore from 'configureStore';
let store = configureStore();

store.subscribe( () => {
  let state = store.getState();
  console.log('New state', state);
});

$(document).foundation();
require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  // <Provider store={store}>
  //
  // </Provider>,
  <h3>HELLO MOK</h3>,
  document.getElementById('app')
);
