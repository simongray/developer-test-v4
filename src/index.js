import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

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

const loggedInUser = (state = 4, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const messages = (state = testMessages, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const peergradeTest = combineReducers({
  messages,
  loggedInUser
})

let store = createStore(peergradeTest)

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
