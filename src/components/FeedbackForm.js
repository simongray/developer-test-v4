import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => (
  <form class="feedback-form">
    <textarea placeholder="Type your message here" />
    <input type="submit" value="Send" />
    <input type="button" value="Cancel" />
  </form>
)

export default FeedbackForm;
