import React, {Component} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => (
	<ul>
		{todos.map((todo, i) => <TodoItem key={i} todo={todo} />) }
	</ul>
)

export default TodoList