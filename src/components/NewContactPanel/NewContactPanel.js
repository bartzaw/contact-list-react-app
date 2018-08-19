import React, {Component} from 'react'
import './NewContactPanel.css'

class newContactPanel extends Component {

  state = {
    contacts: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  }

  addContact = (event) => {
    event.preventDefault();
    const newContactItem = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    }
    fetch(
      'http://localhost:3001/contacts', {
        method: 'POST',
        body: JSON.stringify(newContactItem),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(this.props.getContacts)
  };

  render(){
    return (
      <div className='contacts-container'>
        <form className='contacts-newContact'>

          <label>
            First name:
            <input
              name="firstName"
              type='text'
            />
          </label>

          <label>
            Last name:
            <input
              name="lastName"
              type='text'
            />
          </label>

          <label>
            Phone number:
            <input
              name="phoneNumber"
              type='number'
            />
          </label>

          <label>
            Email:
            <input
              name="emailAddress"
              type='mail'
            />
          </label>

          <div className='contacts-addButton' title='Add new contact'>.</div>
        </form>
      </div>
    )
  }
}

export default newContactPanel