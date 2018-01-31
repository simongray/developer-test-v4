export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const GET_MESSAGES = 'GET_MESSAGES'


export const getMessagesAsync = () => async dispatch => {
	try {
		const messages = await fetch("http://127.0.0.1:5000/")

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
