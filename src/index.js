import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import moment from 'moment'
import './index.css';
import { UPDATE_INPUT, ADD_MESSAGE } from './actions/index'
import { messages, loggedInUser, formInput } from './reducers/index'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const peergradeTest = combineReducers({
  messages,
  loggedInUser,
  formInput
})

let store = createStore(peergradeTest)

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
