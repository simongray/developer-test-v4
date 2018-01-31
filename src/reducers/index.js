import { UPDATE_INPUT, ADD_MESSAGE, GET_MESSAGES } from '../actions/index'
import moment from 'moment'

const testUser = 4;

const loggedInUser = (state = testUser, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const formInput = (state = "", action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.value;
    default:
      return state;
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return state.concat([{
        message: action.message,
        id_user: action.userId,
        date: moment().unix()
      }])
    default:
      return state
  }
}

export {
  loggedInUser,
  formInput,
  messages
}
