import React, {Component} from 'react'
import './newContactPanel.css'

class newContactPanel extends Component {
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