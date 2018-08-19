import React, { Component } from 'react'
import DisplayContact from '../DisplayContact/DisplayContact'
import './ContactList.css'

class ContactsList extends Component {

  render() {
    const contacts = this.props.contactsReceived;
    return (
      <ul className='contact-list'>
        {contacts.map(contact => {
        return (
          <div>
            <li className='contact-list' />
              <DisplayContact
                firstName={contact.firstName}
                lastName={contact.lastName}
                phoneNumber={contact.phoneNumber}
                email={contact.email}
              />
          </div>
        )
        })}
      </ul>
    )
  }
}

export default ContactsList
