import {LETTER_GUESS} from '../actions/letterGuess.js'

export default (state = '' , action = {}) => {
  switch(action.type) {
  case LETTER_GUESS:
    return action.payload
  default:
    return state
  }
}
