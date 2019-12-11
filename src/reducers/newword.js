import {NEW_WORD} from '../actions/newword.js'
import {randomWord} from '../lib/game.js'

export default (state = randomWord(), action = {}) => {
  switch(action.type) {
  case NEW_WORD:
    return action.payload
  default:
    return state
  }
}
