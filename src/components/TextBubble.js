import React from 'react';
import './TextBubble.css';

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


export default TextBubble;
