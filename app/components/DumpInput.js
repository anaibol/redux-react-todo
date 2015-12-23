import React, {Component} from 'react'

export default class DumpInput extends Component {
	state = {value: ''}

	onAddTodo = e => {
		const {value} = this.state
		if (!value) return
		this.props.onAddTodo(value)
		this.state.value = ''
	}

	change = e => this.setState({value: e.target.value})

	keyDown = e => {if (e.keyCode === 13) this.onAddTodo(e)}

	render() {
		return (
			<div>
				<input value={this.state.value} type="text" onChange={this.change} onKeyDown={this.keyDown} placeholder="Input text" />
				<button onClick={this.onAddTodo}>Add todo</button>
			</div>
		)
	}
}
