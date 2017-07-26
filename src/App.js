import React, { Component } from 'react';
import './App.css';
import Login from  './facebooklogin.js';
import Google_Login from './googlelogin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Google_Login/>
      </div>
    );
  }
}

export default App;
