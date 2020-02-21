import React from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import KegList from './components/KegList';
import Keg from './components/Keg';
import Admin from './components/Admin';
import StaffLogin from './components/StaffLogin';
import NewKegForm from './components/NewKegForm';
import EditKegForm from './components/EditKegForm';
import Error404 from './components/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div className="bodyDiv">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/keglist' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/keg' component={Keg} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={StaffLogin} />
          <Route path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/editkegform' component={EditKegForm} />
          <Route component={Error404} />
        </Switch>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
