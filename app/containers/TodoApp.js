import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
import TodoList from '../components/TodoList'
import DumpInput from '../components/DumpInput'
import * as TodoActions from '../actions/todo'

// @connect(state => ({todos: state.todos})) NOT COMPATIBLE WITH BABEL 6
class TodoApp extends Component {

  onAddTodo(text) {
  	this.props.actions.addTodo(text)
  }

  render() {
  	return (
	  	<div>
	  		<TodoList todos={this.props.todos} />
	  		<DumpInput onAddTodo={::this.onAddTodo} />
	  	</div>
	  )
	}
}

export default connect(
	state => ({todos: state.todos}),
	dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
)(TodoApp)
