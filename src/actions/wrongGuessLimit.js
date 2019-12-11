import {wrongGuessLimit} from '../lib/game.js'
export const WRONG_GUESS_LIMIT = 'WRONG_GUESS_LIMIT'


export function WrongGuessLimit(word, geusses){
  return {
    type: WRONG_GUESS_LIMIT,
    payload:wrongGuessLimit(word, geusses)
  }
}
