import {ADD_TODO, REMOVE_TODO} from '../actions/todo'

const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			let todos = state
			return [...todos ]

		default:
			return state		
	}
}

export default todoReducer