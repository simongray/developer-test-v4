import React from 'react';
import './ChatForm.css';

const ChatForm = ({ handleSubmit, handleChange, formInput, loggedInUser }) => (
  <form className="chat-form" onSubmit={(e) => {e.preventDefault(); return handleSubmit(formInput, loggedInUser)}}>
    <textarea onChange={(e) => (handleChange(e.target.value))} placeholder="Type your message here" value={formInput} />
    <input type="submit" value="Send" />
    <input type="button" value="Cancel" />
  </form>
)

export default ChatForm;
