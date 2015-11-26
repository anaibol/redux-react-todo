import React, {Component} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => (
	<ul>
		{todos.map((todo) => <TodoItem todo={todo} />) }
	</ul>
)

export default TodoList