import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreeterPage from './Container/GreeterPage/GreeterPage.react';
import specialEvent from './Container/specialEvent/specialEvent.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GreeterPage />

      </div>
    );
  }
}

export default App;
