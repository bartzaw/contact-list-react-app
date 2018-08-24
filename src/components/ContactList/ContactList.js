import React, { Component } from 'react'
import DisplayContact from '../DisplayContact/DisplayContact'
import EditControlPanel from "../EditControlPanel/EditControlPanel";
import styled from 'styled-components'
import editbtnimage from '../images/editButton.png'
import savebtnimage from '../images/deleteButton.png'

const MainList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const EditButton = styled.button`
    background: url(${editbtnimage}) no-repeat center center;
    height: 81px;
    width: 81px;
    background-color: #fff;
`;

const DeleteButton = styled.button`
  background: url(${savebtnimage}) no-repeat center center;
  height: 81px;
  width: 81px;
  background-color: #fff;
`;

class ContactList extends Component {

  state = {
    editPanelDisplay: {}
  };

  displayEditPanel = (id) => {
    this.setState(prevState => ({
      editPanelDisplay: {
        ...prevState.editPanelDisplay, [id]: !prevState.editPanelDisplay[id]
      }
    }))
  };

  removeContact = id => {
    fetch(
      'http://localhost:3001/contacts/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(this.props.getContacts)
  };

  render() {
    const contacts = this.props.contactsReceived;
    return (
      <MainList>
        {contacts.map(contact => {
        return (
          <div>
            <li className='contact-list' key={contact.id}>
              <DisplayContact
                firstName={contact.firstName}
                lastName={contact.lastName}
                phoneNumber={contact.phoneNumber}
                email={contact.email}
              />
            <DeleteButton onClick={() => this.removeContact(contact.id)}></DeleteButton>
            <EditButton onClick={() => this.displayEditPanel(contact.id)}></EditButton>
              <EditControlPanel
              key={contact.id}
              contactId = {contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phoneNumber={contact.phoneNumber}
              email={contact.email}
              getContacts={this.props.getContacts}
              displayEditPanel={this.displayEditPanel}
              editPanelDisplay={this.state.editPanelDisplay}
              />
            </li>
          </div>
        )
        })}
      </MainList>
    )
  }
}

export default ContactList