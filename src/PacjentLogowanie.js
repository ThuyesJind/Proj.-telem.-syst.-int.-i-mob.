import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { log } from 'util';


export default class PacjentLogowanie extends Component {
    state = {
        firstname: "",
        lastname: "",
        password: "",
        pacjentData: []
    }
  
  
    componentDidMount() {
            axios.get("https://dentalclinic.azurewebsites.net/api/Patient")
                .then((res) => {
                    console.log(res);
                    this.setState({
                        pacjentData: res.data,
                    })
                    
                })
        }
        handleInputChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    handleSubmit = (e) => {
        this.state.pacjentData.forEach ((pacjent) => {
            if(pacjent.firstname === this.state.firstname && pacjent.password === this.state.password)
            {
            localStorage.setItem('id', pacjent.id);
            
            this.props.onCzyZalogowanyChange(true);
            this.props.history.push('/');
            }
            else
            {
                console.log("nie znaleziono")
            }
        })
    }

    render() {
        
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Logowanie</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Imie</label>
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
                    
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

PacjentLogowanie.propTypes ={
    onCzyZalogowanyChange: PropTypes.func
}