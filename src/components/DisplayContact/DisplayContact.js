import React, {Component} from 'react'
import styled from 'styled-components'

const ContactCard = styled.div`
  width: 72%;
  background: #C2B17A;
  display: flex;
  flex-wrap: bold;
  margin: 5px 0;
  border: 1px dashed #9045B5
`;

class ContactDetailedInfo extends Component {
  render() {
    return (
      <ContactCard>
        <p>{this.props.firstName} {this.props.lastName}</p>
        <p>{this.props.phoneNumber}</p>
        <p>{this.props.email}</p>
      </ContactCard>
    )
  }
}

export default ContactDetailedInfo
