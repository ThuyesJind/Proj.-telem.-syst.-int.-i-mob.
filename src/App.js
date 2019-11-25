import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import PacjentForm from './PacjentForm';
import StomatologForm from './StomatologForm';
import pacjentlogowanie from './PacjentLogowanie';
import stomatologlogowanie from './Stomatologlogowanie';
import UsuwaniePacjenta from './UsuwaniePacjenta';
import UsuwanieStomatologa from './UsuwanieStomatologa';
import DodawanieWizyty from './DodawanieWizyty';

export default class App extends Component {

  componentDidMount() {
  }
  render() {
  
    return (
      <div className="App">
        <Router>
        <Header/>
            <div className="container-fluid" id="main-container" >
              <Route exact path ="/pacjent" component={PacjentForm} />
              <Route exact path ="/stomatolog" component={StomatologForm} />
              <Route exact path ="/pacjentlogowanie" component={pacjentlogowanie} />
              <Route exact path ="/stomatologlogowanie" component={stomatologlogowanie} />
              <Route exact path ="/usuwaniepacjenta" component={UsuwaniePacjenta} />
              <Route exact path ="/usuwaniestomatologa" component={UsuwanieStomatologa} />
              <Route exact path ="/dodawaniewizyty" component={DodawanieWizyty} />
            </div>
          </Router>      
      </div>
    );
  }
}