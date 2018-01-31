export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const GET_MESSAGES = 'GET_MESSAGES'

const base = "http://127.0.0.1:5000"

export const getMessagesAsync = () => async dispatch => {
	try {
		const messages = await fetch(base + "/messages")

		dispatch({
			type: GET_MESSAGES,
			messages: await messages.json()
		})
	} catch (e) {
		console.error(e)
	}
}

export const addMessage = (message, userId) => ({
  type: ADD_MESSAGE,
  message,
  userId
})

export const updateInput = (value) => ({
	type: UPDATE_INPUT,
	value: value
})

export const addMessageAndClear = (message, userID) => dispatch => {
	dispatch(addMessage(message, userID))
	dispatch(updateInput(""))
}