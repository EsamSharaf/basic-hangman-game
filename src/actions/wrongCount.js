import {wrongGuessCount} from '../lib/game.js'
export const WRONG_GUESS_COUNT = 'WRONG_GUESS_COUNT'


export function wrongCount(word, geusses){
  return {
    type: WRONG_GUESS_COUNT,
    payload:wrongGuessCount(word, geusses)
  }
}
