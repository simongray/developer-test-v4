import React, { Component } from 'react';
import FeedbackConversation from '../containers/FeedbackConversation';
import FeedbackChatForm from '../containers/FeedbackChatForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackConversation />
        <FeedbackChatForm />
      </div>
    );
  }
}

export default App;
