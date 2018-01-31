export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const GET_MESSAGES = 'GET_MESSAGES'

const jsonHeaders = {
	'Accept': 'application/json',
  	'Content-Type': 'application/json'
}

// easier on the eyes
const baseURL = "http://127.0.0.1:5000"
const endpoint = (path) => baseURL + path

export const getMessagesAsync = () => async dispatch => {
	try {
		const messages = await fetch(endpoint("/messages"))

		dispatch({
			type: GET_MESSAGES,
			messages: await messages.json()
		})
	} catch (e) {
		console.error(e)
	}
}

export const addMessageAsync = (message, userId) => async dispatch => {
	try {
		const messages = await fetch(
			endpoint("/messages"),
			{
				method: 'put',
    			body: JSON.stringify({
    				message: message,
        			id_user: userId,
        			date: 1485393386
    			}),
    			headers: jsonHeaders
			}
		)

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
	dispatch(addMessageAsync(message, userID))
	dispatch(updateInput(""))
}
