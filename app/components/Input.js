import React, { Component } from 'react'

const blur = e => e.target.value

// const addTodo = text => {
// 	console.log(text)
//
// 	if (!text) {
// 		// return
// 		this.props.onAddTodo(this.refs.textInput.value)
// 	}	else {
// 		this.props.onAddTodo(v)
// 	}
// }

export default ({onAddTodo}) => {
 	const onKeyDown = (e) => {
		if (e.which === 13 && e.target.value) {
			// onAddTodo(e.target.value)
			e.target.value = ''
		}
	}

  const onSubmit = (e) => {
		e.preventDefault()
		console.log(e);
			// onAddTodo(es.name.value)
			e.target.value = ''
	}

	// onClick = () => {
	// 	dispatch(addTodo(input.value))
	// 	input.value = ''
	// }

	// <input ref={node => input = node} />
	// <button onClick={onClick}>
	// 	Add Todo
	// </button>

	return (
		<form onSubmit={onSubmit}>
			<input placeholder="Input text" onKeyDown={onKeyDown} />
			<button type="submit">Add todo</button>
		</form>
	)
}
	// state = {value: ''};
	//
	// onAddTodo = e => {
	// 	const {value} = this.state
	// 	if (!value) return
	// 	this.props.onAddTodo(value)
	// 	this.state.value = ''
	// };

	// change = e => this.setState({value: e.target.value});
