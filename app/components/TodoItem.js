import React, {Component} from 'react'

const TodoItem = ({todo, id, onRemoveTodo}) => (
    <li>{todo}<button onClick={onRemoveTodo.bind(this, id)}>X</button></li>
)

export default TodoItem