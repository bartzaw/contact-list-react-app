import React, {Component} from 'react'

class newContactPanel extends Component {

  state = {
    contacts: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };

  clearInputValue = () => {
    this.setState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    })
  }

  addContact = (event) => {
    event.preventDefault();
    this.clearInputValue()
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
        <form className='contacts-newContact' onSubmit={this.addContact}>
          <label>
            First name:
            <input
              name="firstName"
              type='text'
              value={this.state.firstName}
              onChange={(event) => this.setState(
                {firstName: event.target.value
                })}
            />
          </label>

          <label>
            Last name:
            <input
              name="lastName"
              type='text'
              value={this.state.lastName}
              onChange={(event) => this.setState(
                {lastName: event.target.value
                })}
            />
          </label>

          <label>
            Phone number:
            <input
              name="phoneNumber"
              type='number'
              value={this.state.phoneNumber}
              onChange={(event) => this.setState(
                {phoneNumber: event.target.value
                })}
            />
          </label>

          <label>
            Email:
            <input
              name="emailAddress"
              type='mail'
              value={this.state.email}
              onChange={(event) => this.setState(
                {email: event.target.value
                })}
            />
          </label>

          <button className='contacts-addButton' title='Add new contact'>New</button>
        </form>
      </div>
    )
  }
}

export default newContactPanel