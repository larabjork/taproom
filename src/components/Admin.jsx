import React from 'react';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';
import StaffLogin from './StaffLogin';
import PropTypes from "prop-types";


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
    if (this.state.newKegFormVisible){
      currentlyVisibleContent = <NewKegForm onNewKEgCreation={this.props.onNewKegCreation}/>;
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
Admin.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default Admin;
