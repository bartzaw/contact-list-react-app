import React, {Component} from 'react'
import styled from 'styled-components'
import saveButton from '../images/saveButton.png'


const EditMode = styled.div`
  display: flex;  
`;

const EditedContactLabel = styled.label`
  font-weight: bold;
  width: 125px;
  align-self: center;
  color: #C2B17A;
`;

const SaveButton = styled.button`
  background: url(${saveButton}) no-repeat center center;
  height: 81px;
  width: 81px;
  background-color: #fff;
  margin: -10px 25px;
`;

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
      <EditMode>
        <form className='edit-form' onSubmit={this.editContact}>
          <EditedContactLabel>
            First name:
            <input
              name="firstName"
              type='text'
              value={this.state.firstName}
              onChange={(event) => this.setState(
                {firstName: event.target.value
                })}
            />
          </EditedContactLabel>

          <EditedContactLabel>
            Last name:
            <input
              name="lastName"
              type='text'
              value={this.state.lastName}
              onChange={(event) => this.setState(
                {lastName: event.target.value
                })}
            />
          </EditedContactLabel>

          <EditedContactLabel>
            Phone number:
            <input
              name="phoneNumber"
              type='number'
              value={this.state.phoneNumber}
              onChange={(event) => this.setState(
                {phoneNumber: event.target.value
                })}
            />
          </EditedContactLabel>

          <EditedContactLabel>
            Email:
            <input
              name="emailAddress"
              type='mail'
              value={this.state.email}
              onChange={(event) => this.setState(
                {email: event.target.value
                })}
            />
          </EditedContactLabel>
          <SaveButton></SaveButton>
        </form>
      </EditMode>
    )
  }
}

export default EditContact