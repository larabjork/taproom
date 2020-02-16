import React from 'react';
import Header from './components/Header';
import MiniNav from './components/MiniNav';
import Home from './components/Home';
import KegList from './components/KegList';
import Keg from './components/Keg';
import StaffLogin from './components/StaffLogin';
import NewKegForm from './components/NewKegForm';
import EditKegForm from './components/EditKegForm';
import Error404 from './components/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';


const bodyDiv = {
  paddingTop: "8px"
}
function App() {
  return (
    <div style={bodyDiv}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/keglist' component={KegList} />
        <Route path='/keg' component={Keg} />
        <Route path='/login' component={StaffLogin} />
        <Route path='/newkegform' component={NewKegForm} />
        <Route path='/editkegform' component={EditKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
