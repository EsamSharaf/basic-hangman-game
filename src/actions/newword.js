import {randomWord} from '../lib/game.js'
export const NEW_WORD = 'NEW_WORD'


export function newWord(){
  return {
    type: NEW_WORD,
    payload:randomWord()
  }
}
