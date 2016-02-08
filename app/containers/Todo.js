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

//@connect(state => ({todos: state.todos}))
// export default class Todo extends Component {
//   render() {
// 		const { todos } = this.props
// 		const { addTodo, removeTodo } = this.props.actions
//
//   	return (
// 			<div>
// 				<List todos={todos} onRemoveTodo={removeTodo} />
// 				<Input onAddTodo={addTodo} />
// 			</div>
// 	  )
// 	}
// }

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

// export default connect()(Todo)

//export default Todo
