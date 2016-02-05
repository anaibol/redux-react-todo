import React, { Component } from 'react'

export default ({ todo, id, onRemoveTodo }) => (
    <li>{todo} <button onClick={onRemoveTodo.bind(this, id)}>X</button></li>
)
