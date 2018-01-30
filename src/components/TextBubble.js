import React from 'react'
import './TextBubble.css'
import moment from 'moment'

const TextBubble = ({ loggedInUser, date, id_user, message }) => {
	let jsDate = new Date(0)
	jsDate.setUTCSeconds(date)
	const dateString = moment(jsDate).format("Do MMMM H.mm")

	const cssClasses = "text-bubble " + (loggedInUser == id_user? "own" : "other")

	return (
	  <li class={cssClasses}>
	    <div class="header">
	      <span class="author">Peer #{id_user} wrote</span> <span class="time">{dateString}</span>
	    </div>
	    <p>{message}</p>
	    {/*
	    <div class="footer">
	      David changed the grade on question 2 from <span class="grade">No answer</span> to <span class="grade">Exceeds expectations</span>
	    </div>
		*/}
	  </li>
	)
}


export default TextBubble;
