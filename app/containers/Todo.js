import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators} from 'redux'
import { connect, Provider } from 'react-redux'
import TodoList from '../components/TodoList'
import DumpInput from '../components/DumpInput'
import * as TodoActions from '../actions/todo'

import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

//@connect(state => ({todos: state.todos}))
export default class Todo extends Component {
	addTodo = text => {
		console.log(text);
		this.props.actions.addTodo(text)
		console.log('addTodo action dispatched');
	};
	removeTodo = id => this.props.actions.removeTodo(id);

  render() {
		console.log(this.props.actions.addTodo(123))

  	return (
			<div>
				<TodoList todos={this.props.todos} onRemoveTodo={this.removeTodo} />
				<DumpInput onAddTodo={this.addTodo} />
			</div>
	  )
	}
}

export default connect(
	state => (state),
	dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
)(Todo)

//export default Todo
