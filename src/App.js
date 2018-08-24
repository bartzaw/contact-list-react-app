import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router'
import './App.css';
import NewContactPanel from './components/NewContactPanel/NewContactPanel'
import ContactList from './components/ContactList/ContactList'
import styled from 'styled-components'
import appBackground from './components/images/black-background.jpg'

const NewContactHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #C2B17A;
`;

const AppBody = styled.div`
  box-sizing: border-box;
  margin: 0;
  background: url(${appBackground})
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
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
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
      <AppBody className='App'>
        <NewContactHeader>Contact App</NewContactHeader>
        <NewContactPanel getContacts={this.getContacts}/>
        <ContactList
          contactsReceived={this.state.contacts}
          sortContacts={this.sortContacts}
          getContacts={this.getContacts}
        />
      </AppBody>
    );
  }
}

export default App;
