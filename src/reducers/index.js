import { UPDATE_INPUT, ADD_MESSAGE } from '../actions/index'
import moment from 'moment'

const testMessages = [
  {
    "date": 1485339271,
    "id_user": 4,
    "message": "I don't understand why you gave me \"no answer\" when I have written 2 pages of literature review on Interaction Design including theories from Norman, Dourish, and Buxton"
  },
  {
    "date": 1485393386,
    "id_user": 7,
    "message": "It appears you must have handed in the wrong assignment then. What I'm seeing is only 1 page with an introduction and a brief summary of methodologies."
  },
  {
    "date": 1485402534,
    "id_user": 4,
    "message": "This is clearly not true. I checked my hand-in and everything is fine. All the pages are there. I request for a revision of the grade given here by grader #1."
  }
]

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

const messages = (state = testMessages, action) => {
  switch (action.type) {
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
