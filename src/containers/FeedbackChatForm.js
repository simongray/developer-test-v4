import { connect } from 'react-redux'
import { addMessageAndClear, updateInput } from '../actions/index'
import ChatForm from '../components/ChatForm'

function mapStateToProps(state) {
  return {
  	loggedInUser: state.loggedInUser,
  	formInput: state.formInput
  }
}

const mapDispatchToProps = {
  handleSubmit: addMessageAndClear,
  handleChange: updateInput
}

const FeedbackChatForm = connect(mapStateToProps, mapDispatchToProps)(ChatForm)

export default FeedbackChatForm;
