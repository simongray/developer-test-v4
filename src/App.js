import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TextBubble = () => (
  <div class="text-bubble own">
    <div class="header">
      <span class="author">Peer #1 wrote</span> <span class="time">4th July 14.21</span>
    </div>
    <p>Bla bla bla bla</p>
    <div class="footer">
      David changed the grade on question 2 from <span class="grade">No answer</span> to <span class="grade">Exceeds expectations</span>
    </div>
  </div>
)

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
        <TextBubble />
        <TextBubble />
        <FeedbackForm />
      </div>
    );
  }
}

export default App;
