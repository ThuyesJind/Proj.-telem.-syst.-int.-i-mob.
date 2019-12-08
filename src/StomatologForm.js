import React, { Component } from 'react';
import axios from 'axios';

export default class StomatologForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        degree: "",
        password: ""
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = { 
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            degree: this.state.degree,
            password: this.state.password
        }
        axios.post("https://dentalclinic.azurewebsites.net/api/Dentist", data)
            .then((res) => {
                console.log(res);
            })
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Dodawanie Stomatologa</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Imię</label>
                        <input
                            type="string"
                            name="firstname"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.firstname}
                            placeholder="Imie"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Nazwisko</label>
                        <input
                            type="string"
                            name="lastname"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.lastname}
                            placeholder="Adres"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Stopień Naukowy</label>
                        <input
                            type="string"
                            name="degree"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.degree}
                            placeholder="Stopień Naukowy"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Hasło</label>
                        <input
                            type="string"
                            name="password"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            placeholder="Hasło"
                        />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Stwórz Konto</button>
                </form>
            </div>
        )
    }
}