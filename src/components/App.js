import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './FeedbackForm';
import TextBubble from './TextBubble';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextBubble />
        <TextBubble />
        <FeedbackForm />
      </div>
    );
  }
}

export default App;
