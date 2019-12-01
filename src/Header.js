import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Header extends Component {
    wylogujUzytkownika = () => {
        console.log('powinno wylogowac')
        localStorage.clear();
        this.props.onCzyZalogowanyChange(false);
        this.props.onCzyStomatologChange(false);
        window.location.reload();
        window.location.href = "/";
        
    }
    testuje = () => {
        console.log('powinno zalogowac')
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Stomatolog</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {this.props.czyZalogowany && this.props.czyStomatolog ?
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/stomatolog">Dodawanie Stomatologa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/usuwaniepacjenta">Usuwanie Pacjenta</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/usuwaniestomatologa">Usuwanie Stomatologa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/grafik">Grafik</Link>
                                </li>
                                <li className="nav-item">
                                        <Link className="nav-link" onClick={this.wylogujUzytkownika} >Wyloguj</Link>
                                    </li>
                                </ul>
                            :
                                null
                            }   
                            {this.props.czyZalogowany && !this.props.czyStomatolog ?
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/dodawaniewizyty">Dodawanie Wizyty</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/grafik">Grafik Lekarzy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/grafikpacjent">Umówione Wizyty</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.wylogujUzytkownika} >Wyloguj</Link>
                                </li>
                                </ul>
                            :
                            null
                             }   
                             {!this.props.czyZalogowany && !this.props.czyStomatolog ?
                                <ul className="navbar-nav">

                                <li className="nav-item">
                                <Link className="nav-link" to="/pacjent">Rejestracja pacjenta</Link>
                                </li>
                                <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" onClick={this.testuje} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Zaloguj
                                            </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to="/pacjentlogowanie">Logowanie Pacjent</Link>
                                            <Link className="dropdown-item" to="/stomatologlogowanie">Logowanie Stomatolog</Link> 
                                            </div>       
                                        </li>
                                        </ul>
                            :
                            null
                            }
                            </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    czyZalogowany: PropTypes.bool,
    onCzyZalogowanyChange: PropTypes.func,
    czyStomatolog: PropTypes.bool,
    onCzyStomatologChange: PropTypes.func
}