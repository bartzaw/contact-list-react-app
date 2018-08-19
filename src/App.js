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
      .then(data => {
        const contactList = data.sort(this.sortContacts).map(contact=>contact)
        this.setState({
          contacts: contactList
        })
      })
  };

  sortContacts = (prevContact, nextContact) => {
    if (prevContact.lastName.toLowerCase() < nextContact.lastName.toLowerCase()) {
      return -1
    } else if (prevContact.lastName.toLowerCase() > nextContact.lastName.toLowerCase()) {
      return 1
    }
    return 0;
  };


  render() {
    return (
      <ul id="contacts"></ul>
    );
  }
}

export default App;

