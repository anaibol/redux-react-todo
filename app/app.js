import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoReducer from './reducers/todo'

// const initialState = ['make a sandwich', 'kiss a grenouille']

import TodoApp from './containers/TodoApp'
// initialState
const store = createStore(todoReducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
 document.getElementById('app'));