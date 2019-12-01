import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


export default class StomatologLogowanie extends Component {
    state = {
        firstname: "",
        lastname: "",
        stomatologData: []
    }
  
  
    componentDidMount() {
            axios.get("https://dentalclinic.azurewebsites.net/api/Dentist")
                .then((res) => {
                    console.log(res);
                    this.setState({
                        stomatologData: res.data,
                    })
                    
                })
        }
        handleInputChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.stomatologData.forEach ((stomatolog) => {
            if(stomatolog.firstname === this.state.firstname && stomatolog.lastname === this.state.lastname)
            {
                this.props.onCzyStomatologChange(true);
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
                        <label for="exampleFormControlInput1">Nazwisko</label>
                        <input
                            type="string"
                            name="lastname"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.lastname}
                            placeholder="Nazwisko"
                        />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

StomatologLogowanie.propTypes ={
    onCzyZalogowanyChange: PropTypes.func
}