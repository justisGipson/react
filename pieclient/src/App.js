import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Auth />
        <Pies />
      </div>
    );
  }
}

export default App;
