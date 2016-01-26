import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default ({ todos, onRemoveTodo }) => (
	<ul>
		{todos.map((todo, i) => <TodoItem key={i} todo={todo} id={i} onRemoveTodo={onRemoveTodo} />) }
	</ul>
)
