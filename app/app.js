//import {h, Component, render} from 'preact'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import todos from './reducers/todos'
// import DevTools from './containers/DevTools'
// import { persistStore, autoRehydrate } from 'redux-persist'
// import reduxPersistImmutable from 'redux-persist-immutable'

import Todo from './containers/Todo'

const finalCreateStore = compose(
  // DevTools.instrument(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// const store = autoRehydrate()(finalCreateStore)(todos)
const store = createStore(todos)

// persistStore(store, {transforms: [reduxPersistImmutable]})
// persistStore(store)

// <DevTools />
ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
 document.getElementById('app'));
