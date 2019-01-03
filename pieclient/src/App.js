import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Logout from './components/Navbar/Logout/Logout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />{
          <Logout />
        }
      </div>
    );
  }
}

export default App;
