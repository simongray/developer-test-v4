import React from 'react'
import './TextBubble.css'
import moment from 'moment'

const TextBubble = ({ loggedInUser, date, id_user, message }) => {
	const dateString = moment.unix(date).format("Do MMMM H.mm")
	const cssClasses = "text-bubble " + (loggedInUser === id_user? "own" : "other")
	const paragraphs = message.split("\n");

	return (
	  <li className={cssClasses}>
	    <div className="header">
	      <span className="author">Peer #{id_user} wrote</span> <span className="time">{dateString}</span>
	    </div>
	    {paragraphs.map((paragraph, id) => (<p key={id}>{paragraph}</p>))}
	    {/*
	    <div class="footer">
	      David changed the grade on question 2 from <span class="grade">No answer</span> to <span class="grade">Exceeds expectations</span>
	    </div>
		*/}
	  </li>
	)
}


export default TextBubble;
