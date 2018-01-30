const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_INPUT = 'UPDATE_INPUT'


const addMessage = (message, userId) => ({
  type: ADD_MESSAGE,
  message,
  userId
})

const updateInput = (value) => ({
	type: UPDATE_INPUT,
	value: value
})

export {
	addMessage,
	updateInput,
	ADD_MESSAGE,
	UPDATE_INPUT
}
