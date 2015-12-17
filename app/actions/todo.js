import {ADD_TODO, REMOVE_TODO} from '../constants/todo'

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function removeTodo(id) {
  return {type: REMOVE_TODO, id}
}


//export default {
//
//
//}