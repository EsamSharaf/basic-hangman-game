import * as React from 'react'
import { Link } from 'react-router-dom'


export default class InitialPage extends React.PureComponent {

  render() {
    return (
      <div>
        <h1>Welocme to Hangman Game</h1>
        <Link to="/hangman">Start Playing!</Link>
      </div>
    )
  }
}
