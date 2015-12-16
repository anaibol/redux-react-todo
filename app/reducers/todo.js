import * as types from '../constants/todo'

const initialState = {
  todos: ['make a sandwich', 'kiss a grenouille', 'build a todo app']
}

const todoReducer = (state = initialState, action) => {
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