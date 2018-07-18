import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Home />
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
