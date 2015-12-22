//import * as types from '../constants/todo'
import {List, Map} from 'immutable'
import camelCase from 'camel-case'

const initialState = Map({
  todos: List(['make a sandwich', 'kiss a grenouille', 'build a todo app'])
})

const actions = {
  addTodo(state, {text}) {
    return state.update('todos', todos => {
      return todos.push(text);
    });
  },

  // removeTodo(state, {id}) {
  //   return {todos: state.todos.splice(id)}
  // }
}

export default (state = initialState, {type, ...payload}) => {
  // state = state.toJS()
  // state.set(todos, state);

  const reducer = actions[camelCase(type)]
  const returnState = (reducer) ? reducer(state, payload) : state
  return returnState //.toJS()
}

//reducer.apply(state, ["1"])
