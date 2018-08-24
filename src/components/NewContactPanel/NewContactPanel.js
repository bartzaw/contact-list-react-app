import React, {Component} from 'react'
import styled from 'styled-components'
import addButton from '../images/addContact.png'

const AddButton = styled.button`
  background: url(${addButton}) no-repeat center center;
  margin: auto;
  height: 81px;
  width: 81px;
  background-color: #fefefe;
`;

const NewContact = styled.form`
  text-align: center;
  align-self: center;
  height: 25%;
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  border: 3px solid #000;
`;

const NewContactItem = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  justify-content: center;
`;

const ContactLabel = styled.label`
  font-weight: bold;
  width: 125px;
  align-self: center;
  color: #C2B17A;
`;

const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  };

  addContact = (event) => {
    event.preventDefault();
    this.clearInputValue()
    const newContactItem = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    };
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
      <ContactListContainer className='contacts-container'>
        <NewContact className='contacts-newContact' onSubmit={this.addContact}>
          <NewContactItem>
            <ContactLabel>
              First name:
              <input
                name="firstName"
                type='text'
                value={this.state.firstName}
                onChange={(event) => this.setState(
                  {firstName: event.target.value
                  })}
              />
            </ContactLabel>
          </NewContactItem>
          <NewContactItem>
            <ContactLabel>
              Last name:
              <input
                name="lastName"
                type='text'
                value={this.state.lastName}
                onChange={(event) => this.setState(
                  {lastName: event.target.value
                  })}
              />
            </ContactLabel>
          </NewContactItem>
          <NewContactItem>
            <ContactLabel>
              Phone number:
              <input
                name="phoneNumber"
                type='number'
                value={this.state.phoneNumber}
                onChange={(event) => this.setState(
                  {phoneNumber: event.target.value
                  })}
              />
            </ContactLabel>
          </NewContactItem>
          <NewContactItem>
            <ContactLabel>
              Email:
              <input
                name="emailAddress"
                type='mail'
                value={this.state.email}
                onChange={(event) => this.setState(
                  {email: event.target.value
                  })}
              />
            </ContactLabel>
          </NewContactItem>
          <AddButton title='Add new contact'></AddButton>
        </NewContact>
      </ContactListContainer>
    )
  }
}

export default newContactPanel