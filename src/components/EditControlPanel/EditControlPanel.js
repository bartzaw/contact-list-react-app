import React, {Component} from 'react'
import EditContact from '../EditContact/EditContact'
import './EditControlPanel.css'
import styled from 'styled-components'

const EditMode = styled.div`
  display: flex;
  color: #C2B17A;
`;


class EditControlPanel extends Component {

  render(){
    return(
      <EditMode className={!this.props.editPanelDisplay[this.props.contactId] ? "not-visible" : "visible"}>
        <EditContact
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          phoneNumber={this.props.phoneNumber}
          email={this.props.email}
          contactId={this.props.contactId}
          getContacts={this.props.getContacts}
          showEditPanel={this.props.displayEditPanel}
        />
      </EditMode>
    )
  }
}

export default EditControlPanel