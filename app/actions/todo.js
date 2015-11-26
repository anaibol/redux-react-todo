import *  as types from '../constants/todo'

export function addTodo(text) {
  return {type: types.ADD_TODO, text}
}

export function removeTodo(id) {
  return {type: types.REMOVE_TODO, id}
}