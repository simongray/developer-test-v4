import { connect } from 'react-redux'
import Conversation from '../components/Conversation'

function mapStateToProps(state) {
  return {
  	messages: state.messages,
  	loggedInUser: state.loggedInUser
  }
}

const FeedbackConversation = connect(mapStateToProps)(Conversation)

export default FeedbackConversation;
