import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import todos from './reducers/todos'
import DevTools from './containers/DevTools'
import { persistStore, autoRehydrate } from 'redux-persist'
import reduxPersistImmutable from 'redux-persist-immutable'

import Todo from './containers/Todo'

const finalCreateStore = compose(DevTools.instrument())(createStore);
const store = autoRehydrate()(finalCreateStore)(todos)
// persistStore(store, {transforms: [reduxPersistImmutable]})
// persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Todo />
      <DevTools />
    </div>
  </Provider>,
 document.getElementById('app'));
