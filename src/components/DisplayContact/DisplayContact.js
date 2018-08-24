import React, {Component} from 'react'
import styled from 'styled-components'

const ContactCard = styled.div`
  width: 98%;
  background: #C2B17A;
  display: flex;
  flex-wrap: bold;
  margin: 5px 0;
  border: 1px dashed #9045B5
`;

const ContactData = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24%;
  font-size: 20px;
`;

class ContactDetailedInfo extends Component {
  render() {
    return (
      <ContactCard>
        <ContactData>{this.props.firstName}</ContactData>
        <ContactData>{this.props.lastName}</ContactData>
        <ContactData>{this.props.phoneNumber}</ContactData>
        <ContactData>{this.props.email}</ContactData>
      </ContactCard>
    )
  }
}

export default ContactDetailedInfo
