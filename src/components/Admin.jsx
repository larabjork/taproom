import React from 'react';
import PropTypes from "prop-types";
import KegList from './KegList';
import KegLevel from './KegLevel';


function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKegLevel !=null) {
    optionalSelectedKegContent = <KegLevel selectedKegLevel={props.kegList[props.selectedKegLevel]} />
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedKegContent}
      <KegLevel />
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKegLevel: PropTypes.string
};


export default Admin;
