import React, {Component} from 'react'
import EditContact from '../EditContact/EditContact'

class EditControlPanel extends Component {

  render(){
    return(
      <div className={'edit-panel'}>
        <EditContact
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          phoneNumber={this.props.phoneNumber}
          email={this.props.email}
          contactId={this.props.contactId}
          getContacts={this.props.getContacts}
          showEditPanel={this.props.showEditPanel}
        />
      </div>
    )
  }
}

export default EditControlPanel