import React from 'react';
import TextBubble from './TextBubble';
import './Conversation.css';

const Conversation = ({ messages, loggedInUser }) => (
  <ul className="conversation">
    {messages.map((message, index) => (
      <TextBubble key={index} loggedInUser={loggedInUser} {...message} />
    ))}
  </ul>
)

export default Conversation;
