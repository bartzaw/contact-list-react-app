import React, {Component} from 'react'
import EditContact from '../EditContact/EditContact'
import './EditControlPanel.css'

class EditControlPanel extends Component {

  render(){
    return(
      <div className={!this.props.editPanelDisplay[this.props.contactId] ? "not-visible" : "visible"}>
        <EditContact
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          phoneNumber={this.props.phoneNumber}
          email={this.props.email}
          contactId={this.props.contactId}
          getContacts={this.props.getContacts}
          showEditPanel={this.props.displayEditPanel}
        />
      </div>
    )
  }
}

export default EditControlPanel