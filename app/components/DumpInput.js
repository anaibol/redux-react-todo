import React, {Component} from 'react'

class DumpInput extends Component {

	onAddTodo(e) {
		const text = e.target.value
		if (e.keyCode !== 13) return
		this.props.onAddTodo(text)
	}

	render() {
		return (<input onKeyDown={::this.onAddTodo} placeholder="Input text" />)
	}
}

export default DumpInput