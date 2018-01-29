import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const FeedbackForm = () => (
  <form class="feedback-form">
    <textarea placeholder="Type your message here" />
    <input type="submit" value="Send" />
    <input type="button" value="Cancel" />
  </form>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackForm />
      </div>
    );
  }
}

export default App;
