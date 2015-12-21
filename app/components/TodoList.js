import React, {Component} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onRemoveTodo}) => (
	<ul>
		{todos.map((todo, i) => <TodoItem key={i} todo={todo} id={i} onRemoveTodo={onRemoveTodo} />) }
	</ul>
)
export default TodoList

