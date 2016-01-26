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

	onAddTodo = v => {
		console.log(v);

		if (v.target.value) {
			this.props.onAddTodo(v)
		}	else {
			this.props.onAddTodo(this.refs.textInput.value)
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
				<button onClick={this.onAddTodo}>Add todo</button>
			</div>
		)
	}
}
