//import * as types from '../constants/todo'
import List from 'immutable'
import camelCase from 'camel-case'

const initialState = {
  todos: ['make a sandwich', 'kiss a grenouille', 'build a todo app']
}

const actions = {
  addTodo(state, {text}) {
    return {todos: [...state.todos, text]}
  },

  removeTodo(state, {id}) {
    return {todos: state.todos.splice(0, id)}
  }
}

export default (state = initialState, {type, ...payload}) => {
  const reducer = actions[camelCase(type)]
  return (reducer) ? reducer(state, payload) : state
}

//reducer.apply(state, ["1"])