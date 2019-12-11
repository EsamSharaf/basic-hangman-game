import {WRONG_GUESS_COUNT} from '../actions/wrongCount.js'

export default (state = 0, action = {}) => {
  switch(action.type) {
  case WRONG_GUESS_COUNT:
    return action.payload
  default:
    return state
  }
}
