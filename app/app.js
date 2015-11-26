import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoReducer from './reducers/todo'

const initialState = {
	todos: ['make a sandwich', 'kiss a grenouille']
}

import TodoApp from './containers/TodoApp'
const store = createStore(todoReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
 document.getElementById('app'));