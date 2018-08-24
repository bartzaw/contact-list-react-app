import React, { Component } from 'react';
import './App.css';
import NewContactPanel from './components/NewContactPanel/NewContactPanel'
import ContactList from './components/ContactList/ContactList'
import styled from 'styled-components'

const NewContactHeader = styled.h1`
  text-align: center;
  font-weight: bold;
`;



class App extends Component {
  state = {
    contacts: [],
  };

  getContacts = () => {
    fetch('http://localhost:3001/contacts')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const contactList = data.sort(this.sortContacts);
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

  componentDidMount(){
    this.getContacts()
  }

  render() {
    return (
      <div className='App'>
        <NewContactHeader>Contact App</NewContactHeader>
        <NewContactPanel getContacts={this.getContacts}/>
        <ContactList
          contactsReceived={this.state.contacts}
          sortContacts={this.sortContacts}
          getContacts={this.getContacts}
        />
      </div>
    );
  }
}

export default App;

