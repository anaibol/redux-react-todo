import React, {Component} from 'react'

export default class DumpInput extends Component {
	// state = {value: ''};
	//
	// onAddTodo = e => {
	// 	const {value} = this.state
	// 	if (!value) return
	// 	this.props.onAddTodo(value)
	// 	this.state.value = ''
	// };

	// change = e => this.setState({value: e.target.value});

	blur = e => {
		this.onAddTodo(e.target.value)
	};

	keyDown = e => {
		if (e.keyCode === 13 && e.target.value)	{
			this.props.onAddTodo(e.target.value)
		}
	};

	render() {
		return (
			<div>
				<input type="text" onBlur={this.blur} onKeyDown={this.keyDown} placeholder="Input text" />
			</div>
		)
	}
}


// <button onClick={this.onAddTodo}>Add todo</button>
