import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators} from 'redux'
import { connect, Provider } from 'react-redux'
import List from '../components/List'
import Input from '../components/Input'
import * as TodoActions from '../actions/todo'

// import { createDevTools } from 'redux-devtools'

// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

const Todo = ({todos, actions}) => (
	<div>
		<List todos={todos} removeTodo={actions.removeTodo} />
		<Input addTodo={actions.addTodo} />
	</div>
)
export default connect(
	state => (state),
	dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
)(Todo)
