import React, { Component } from 'react'
import './ContactList.css'

class ContactsList extends Component {

  render() {
    return (
      <ul className='contact-list'>
        {contacts.map(contact => {
        return (
          <div>
            <li className='contact-list' />
          </div>
        )
        })}
      </ul>
    )
  }
}
