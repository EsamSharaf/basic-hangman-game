import {WRONG_GUESS_LIMIT} from '../actions/wrongGuessLimit.js'

export default (state = false.toString(), action = {}) => {
  switch(action.type) {
  case WRONG_GUESS_LIMIT:
    return action.payload
  default:
    return state
  }
}
