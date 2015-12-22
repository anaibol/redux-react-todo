import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
import TodoList from '../components/TodoList'
import DumpInput from '../components/DumpInput'
import * as TodoActions from '../actions/todo'

//@connect(state => ({todos: state.todos}))
export default class Todo extends Component {

	addTodo(text) {
		this.props.actions.addTodo(text)
	}

	removeTodo(id) {
		this.props.actions.removeTodo(id)
	}

  render() {
		console.log(this.props.todos)
  	return (
			<div>
				<TodoList todos={this.props.todos} onRemoveTodo={::this.removeTodo} />
				<DumpInput onAddTodo={::this.addTodo} />
			</div>
	  )
	}
}

export default connect(
	state => ({todos: state.todos}),
	dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
)(Todo)

//export default Todo
