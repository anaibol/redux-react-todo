import React, { Component } from 'react'
import Item from './Item'

export default ({ todos, onRemoveTodo }) => (
	<ul>
		{todos.map((todo, i) =>
			<Item key={i} todo={todo} id={i} onRemoveTodo={onRemoveTodo} />
		)}
	</ul>
)
