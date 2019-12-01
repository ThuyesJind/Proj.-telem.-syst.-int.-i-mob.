import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import PacjentForm from './PacjentForm';
import StomatologForm from './StomatologForm';
import PacjentLogowanie from './PacjentLogowanie';
import UsuwaniePacjenta from './UsuwaniePacjenta';
import UsuwanieStomatologa from './UsuwanieStomatologa';
import DodawanieWizyty from './DodawanieWizyty';
import Grafik from './Grafik'
import StomatologLogowanie from './Stomatologlogowanie';
import GrafikPacjent from './GrafikPacjent';
import Home from './Home';

export default class App extends Component {
  state = {
    czyZalogowany: null,
    czyStomatolog: null
  }
  componentDidMount() {
    if (localStorage.getItem('daneUzytkownika')) {
      this.setState({
          czyZalogowany: true
      })
  }
}
  handleCzyZalogowanyChange = (czyZalogowanyNew) => {
    console.log(czyZalogowanyNew);

    this.setState({
      czyZalogowany: czyZalogowanyNew
    })
  }
  handleCzyStomatologChange = (czyStomatologNew) => {
    console.log(czyStomatologNew);

    this.setState({
      czyStomatolog: czyStomatologNew
    })
  }
  render() {
  
    return (
      <div className="App">
        <Router>
        <Header czyZalogowany={this.state.czyZalogowany} onCzyZalogowanyChange={this.handleCzyZalogowanyChange}  
        czyStomatolog={this.state.czyStomatolog} onCzyStomatologChange={this.handleCzyStomatologChange}/>
            <div className="container-fluid" id="main-container" >
              <Route exact path ="/pacjent" component={PacjentForm} />
              <Route exact path ="/stomatolog" component={StomatologForm} />
              <Route exact path ="/" component={Home} />
              <Route exact path ="/pacjentlogowanie" render={
                (props) => <PacjentLogowanie
                  {...props}
                  onCzyZalogowanyChange={this.handleCzyZalogowanyChange}
                />
              }/>
              <Route exact path ="/stomatologlogowanie" render={
                (props) => <StomatologLogowanie
                  {...props}
                  onCzyZalogowanyChange={this.handleCzyZalogowanyChange}
                  onCzyStomatologChange={this.handleCzyStomatologChange}
                />
              }/>
              <Route exact path ="/usuwaniepacjenta" component={UsuwaniePacjenta} />
              <Route exact path ="/usuwaniestomatologa" component={UsuwanieStomatologa} />
              <Route exact path ="/dodawaniewizyty" component={DodawanieWizyty} />
              <Route exact path ="/grafik" component={Grafik} />
              <Route exact path ="/grafikpacjent" component={GrafikPacjent} />
            </div>
          </Router>      
      </div>
    );
  }
}