import * as types from '../constants/todo'

const todoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        todos: [...state.todos, action.text]
      }

      default:
      return state
    }
  }

  export default todoReducer