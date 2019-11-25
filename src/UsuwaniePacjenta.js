import React, { Component } from 'react';
import axios from 'axios';

export default class UsuwaniePacjenta extends Component {
    state = {
        id: ""
  
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.delete("https://dentalclinic.azurewebsites.net/api/Patient/" + this.state.id)
            .then((res) => {
                console.log(res);
            })
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Usuwanie Pacjenta</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Id</label>
                        <input
                            type="id"
                            name="id"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.id}
                            placeholder="id"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Usuń</button>
                </form>
            </div>
        )
    }
}