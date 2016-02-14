import React, { Component } from 'react'

export default ({ todo, id, removeTodo }) => (
  <li>{todo} <button onClick={removeTodo.bind(this, id)}>X</button></li>
)
