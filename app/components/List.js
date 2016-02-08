import React, { Component } from 'react'
import Item from './Item'

export default ({ todos, removeTodo }) => (
	<ul>
		{todos.map((todo, i) =>
			<Item key={i} todo={todo} id={i} removeTodo={removeTodo} />
		)}
	</ul>
)
