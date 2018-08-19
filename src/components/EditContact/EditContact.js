import React, {Component} from 'react'
import 'EditContact.css'

class EditContact extends Component {
  render() {
    return (
      <div>
        <form className='edit-form' onSubmit={this.editContract}>
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