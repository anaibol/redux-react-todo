import React, {Component} from 'react'

class DumpInput extends Component {

	constructor(props) {
		super(props)
		this.state = {value: ''}
	}

	onAddTodo = (e) => {
		const text = this.state.value
		if (!text) return
		this.props.onAddTodo(text)

		this.state.value = ''
	}

	onChange = (e) => {
		this.setState({value: e.target.value})
	}

	onKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.onAddTodo(e)
		}
	}

	render() {
		return (
			<div>
				<input value={this.state.value} type="text" onChange={this.onChange} onKeyDown={this.onKeyDown} placeholder="Input text" />
				<button onClick={this.onAddTodo}>Add todo</button>
			</div>
		)
	}
}

export default DumpInput