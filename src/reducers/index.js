import { combineReducers } from 'redux'
import newWord from './newword.js'
import letterGuess from './letterGuess.js'
import wrongCount from './wrongCount.js'
import wrongGuessLimit from './wrongGuessLimit.js'


export default combineReducers({
  newWord,
  letterGuess,
  wrongCount,
  wrongGuessLimit
})
