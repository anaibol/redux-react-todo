import React, { Component } from 'react'

export default class Input extends Component {
	onSubmit = (e) => {
		e.preventDefault()

		const input = this.refs.textInput
		const text = input.value.trim();

		if (!text) return
		this.props.addTodo(text)
		input.value = ''
	};

  render() {
  	return (
			<form onSubmit={this.onSubmit}>
				<input ref="textInput" placeholder="Input text" />
				<button type="submit">Add todo</button>
			</form>
	  )
	}
}
r
