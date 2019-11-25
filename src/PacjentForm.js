import React, { Component } from 'react';
import axios from 'axios';

export default class KlientForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        address: ""
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
            address: this.state.address
        }
        axios.post("https://dentalclinic.azurewebsites.net/api/Patient", data)
            .then((res) => {
                console.log(res);
            })
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Dodawanie Pacjenta</h2>
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
                        <label for="exampleFormControlInput1">Adres</label>
                        <input
                            type="string"
                            name="address"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.address}
                            placeholder="Adres"
                        />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Stwórz Konto</button>
                </form>
            </div>
        )
    }
}