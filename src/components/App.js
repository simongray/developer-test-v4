import React, { Component } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackConversation from '../containers/FeedbackConversation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackConversation />
        <FeedbackForm />
      </div>
    );
  }
}

export default App;
