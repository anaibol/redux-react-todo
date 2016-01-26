import React, { Component } from 'react'

export default class DumpInput extends Component {
	// state = {value: ''};
	//
	// onAddTodo = e => {
	// 	const {value} = this.state
	// 	if (!value) return
	// 	this.props.onAddTodo(value)
	// 	this.state.value = ''
	// };

	onAddTodo = text => {
		console.log(text)

		if (!text) {
			// return
			this.props.onAddTodo(this.refs.textInput.value)
		}	else {
			this.props.onAddTodo(v)
		}
	};

	// change = e => this.setState({value: e.target.value});

	// blur = e => {
	// 	this.onAddTodo(e.target.value)
	// };

	keyDown = e => {
		if (e.keyCode === 13 && e.target.value)	{
			this.onAddTodo(e.target.value)
		}
	};

	render() {
		return (
			<div>
				<input ref="textInput" onBlur={this.blur} onKeyDown={this.keyDown} placeholder="Input text" />
				<button onClick={this.onAddTodo.bind(this, null)}>Add todo</button>
			</div>
		)
	}
}
