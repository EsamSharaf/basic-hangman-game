import {showGuess} from '../lib/game.js'
export const LETTER_GUESS = 'LETTER_GUESS'


export function letterGuess(word, letter){
  return {
    type: LETTER_GUESS,
    payload:showGuess(word, letter)
  }
}
