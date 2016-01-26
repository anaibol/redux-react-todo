import { ADD_TODO, REMOVE_TODO } from '../constants/todo'
// import {List, Map} from 'immutable'
import camelCase from 'camel-case'

const initialState = {
  todos: ['make a sandwich', 'kiss a grenouille', 'build a todo app']
}

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.text]
      }

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, i) => i !== action.id)
      }

    default:
      return state
  }
}

//reducer.apply(state, ["1"])
