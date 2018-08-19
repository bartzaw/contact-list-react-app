import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contacts: [],
  };

  getContacts = () => {
    fetch('http://localhost:3000/contacts')
      .then(response => {
        return response.json()
      })

  };



  render() {
    return (
      <ul id="contacts"></ul>
    );
  }
}

export default App;

