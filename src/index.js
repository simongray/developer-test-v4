import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import './index.css';
import { messages, loggedInUser, formInput } from './reducers/index'
import { getMessagesAsync } from './actions/index'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const peergradeTest = combineReducers({
  messages,
  loggedInUser,
  formInput
})

let store = createStore(
  peergradeTest,
  applyMiddleware(thunk)
)

store.dispatch(getMessagesAsync())

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();