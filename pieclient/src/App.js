import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth' 
import Logout from './components/Navbar/Logout/Logout';

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
