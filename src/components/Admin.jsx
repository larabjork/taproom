import React from 'react';
import EditKegForm from './EditKegForm';
import StaffLogin from './StaffLogin';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editKegFormVisible: false,
      newKegFormVisible: false
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleNewKegClick = this.handleNewKegClick.bind(this);
  }

  handleEditClick(){
    this.setState({editKegFormVisible: true});
    console.log('editKegFormVisible is currently set to:' + this.state.editKegFormVisible);
  }
  handleNewKegClick(){
    this.setState({newKegFormVisible: true});
    console.log('newKegFormVisible is currently set to:' + this.state.newKegFormVisible);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.editKegFormVisible){
      currentlyVisibleContent = <EditKegForm />;
    } else {
      currentlyVisibleContent = <StaffLogin onLoginConfirmation={this.handleLoginConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default Admin;
