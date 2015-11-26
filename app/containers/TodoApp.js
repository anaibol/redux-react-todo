import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect, Provider} from 'react-redux'
import TodoList from '../components/TodoList'
import DumpInput from '../components/DumpInput'
import {ADD_TODO, REMOVE_TODO} from '../actions/todo'
import todoReducer from '../reducers/todo'

const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}

const removeTodo = {
	type: REMOVE_TODO,
}


// @connect(state => ({todos: state.todos}))
class TodoApp extends Component {

	// constructor() {
	// 	super(todos)
	// }

	onAddTodo(e) {
		if (e.keyCode !== 13) { // Enter key
			return
		}

		// store.dispatch(addTodo('text'))
	}

  render() {
  	const todos = this.props.todos
  	console.log(todos);
  	return (
	  	<div>
	  		
	  	</div>
	  )
	}
}

export default connect()(TodoApp)