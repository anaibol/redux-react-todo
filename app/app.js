import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todos from './reducers/todos'
import {persistStore, autoRehydrate} from 'redux-persist'

import Todo from './containers/Todo'
const store = autoRehydrate()(createStore)(todos)
persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
 document.getElementById('app'));