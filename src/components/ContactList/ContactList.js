import React, { Component } from 'react'
import DisplayContact from '../DisplayContact/DisplayContact'
import './ContactList.css'

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
      <ul className='contact-list'>
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
            <button onClick={() => this.removeContact(contact.id)}>Remove</button>
            <button onClick={() => this.displayEditPanel(contact.id)}>Edit</button>

            </li>
          </div>
        )
        })}
      </ul>
    )
  }
}

export default ContactList