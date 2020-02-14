import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import KegList from './components/KegList';
import Keg from './components/Keg';
import NewKegForm from './components/NewKegForm';
import EditKegForm from './components/EditKegForm';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="bodyDiv">

      <Header/>
      <div>
        <Home/>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/keglist' component={KegList} />
        <Route path='/keg' component={Keg} />
        <Route path='/newkegform' component={NewKegForm} />
        <Route path='/editkegform' component={EditKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
