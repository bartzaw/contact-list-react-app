import React, {Component} from 'react'

class EditContact extends Component {

  state = {
    contacts: [],
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    phoneNumber: this.props.phoneNumber,
    email: this.props.email,
  };

  componentDidMount() {
    this.props.getContacts()
  }

  editContact = (e) => {
    e.preventDefault();
    const editedContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
    };
    fetch(
      'http://localhost:3001/contacts/' + this.props.contactId, {
        method: 'PATCH',
        body: JSON.stringify(editedContact),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(this.props.getContacts)
  };

  render() {
    return (
      <div>
        <form className='edit-form' onSubmit={this.editContact}>
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
          <button className='save-button'>Save</button>
        </form>
      </div>
    )
  }
}

export default EditContact