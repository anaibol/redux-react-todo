import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoReducer from './reducers/todo'
import {persistStore, autoRehydrate} from 'redux-persist'

import TodoApp from './containers/TodoApp'
const store = autoRehydrate()(createStore)(todoReducer)
persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
 document.getElementById('app'));