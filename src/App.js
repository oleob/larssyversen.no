import React, { Component } from 'react';
import Container from './Components/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Container />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
