import * as React from 'react'
import {newWord} from '../actions/newword.js'
import {letterGuess} from '../actions/letterGuess.js'
import {wrongCount} from '../actions/wrongCount.js'
import {WrongGuessLimit} from '../actions/wrongGuessLimit.js'
import { connect } from 'react-redux'


class HangmanContainer extends React.PureComponent {

  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  GamerGuesses = [];

  guessButton = (letter) => {
    console.log("guessButton Called");
    this.GamerGuesses.push(letter)
    let x = document.getElementById(letter);
    x.disabled = true;
    this.props.letterGuess(this.props.ranWord, this.GamerGuesses);
    this.props.wrongCount(this.props.ranWord, this.GamerGuesses);
    this.props.WrongGuessLimit(this.props.ranWord, this.GamerGuesses);
  }

  render() {
    if(this.props.letterGues === ""){
      this.props.letterGuess(this.props.ranWord,"")
    }

    return (
      <div>
        {this.props.ranWord}
        <br/>
        <br/>
        Guessed Letters: {this.props.letterGues}
        <br/>
        <br/>
        {this.alphabet.map(alphaLetter =>
          <button type="button" id={alphaLetter} onClick={()=>{
            this.guessButton(alphaLetter);
            // this.wrongAlphaCount(alphaLetter);
            this.disabled = true;
          }}>
            {alphaLetter}
          </button>
        )}
        <br/>
        <br/>
        Worng Letter Count: {this.props.wrongLetterCount}
        <br/>
        Wrong Guess Limit: {this.props.wrongguesslimit.toString()}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    ranWord: state.newWord,
    letterGues: state.letterGuess,
    wrongLetterCount: state.wrongCount,
    wrongguesslimit: state.wrongGuessLimit
  }
}


export default connect(mapStateToProps,{newWord, letterGuess, wrongCount, WrongGuessLimit})(HangmanContainer)
