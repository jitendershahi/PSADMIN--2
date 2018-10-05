import React, { Component } from 'react';
import './App.css';

import Header from './container/header/header'

import Routes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Routes />
      </div>
    );
  }
}

export default App;
