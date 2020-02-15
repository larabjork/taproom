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
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="bodyDiv">

      <Header/>
      <Container>
        <Row>
          <Col md={1}>
          </Col>
          <Col md={10}>
            <Route exact path='/' component={Home} />
          </Col>
        </Row>
        <Col md={1}>
        </Col>
      </Container>
      <Switch>
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
