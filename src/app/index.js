import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const persistedState = localStorage.getItem(' _username_recipes') ? JSON.parse(localStorage.getItem(' _username_recipes')) : {};

const store = createStore(reducers, persistedState);
store.subscribe(()=>{
  localStorage.setItem(' _username_recipes', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#container'));