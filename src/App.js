import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import InitialPage from './components/InitialPage'
import HangmanContainer from './components/HangmanContainer.js'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Route path="/" component={InitialPage} />
            <Route path="/hangman" component={HangmanContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
