import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Header extends Component {
    wylogujUzytkownika = () => {
        console.log('powinno wylogowac')
        localStorage.clear();
        this.props.onCzyZalogowanyChange(false);
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
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/pacjent">Dodawanie pacjenta</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/stomatolog">Dodawanie Stomatologa</Link>
                            </li>
                            </ul>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/pacjentlogowanie">Logowanie Pacjenta</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/stomatologlogowanie">Logowanie Stomatolog</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/usuwaniepacjenta">Usuwanie Pacjenta</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/usuwaniestomatologa">Usuwanie Stomatologa</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/dodawaniewizyty">Dodawanie Wizyty</Link>
                            </li>
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
    czyWeterynarz: PropTypes.bool
}