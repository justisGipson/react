import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Auth />
      </div>
    );
  }
}

export default App;
