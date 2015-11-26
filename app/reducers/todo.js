import * as types from '../constants/todo'

const todoReducer = (state, action) => {
	console.log(action.type);
	switch (action.type) {
		case types.ADD_TODO:
			let todos = state.todoss
			return [...todos, action.text]

		default:
			return state
	}
}

export default todoReducer