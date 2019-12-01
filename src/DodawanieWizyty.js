import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class DodawanieWizyty extends Component {
    state = {
        date: new Date(),
        idKlienta: "",
        idStomatologa: "",
        idZabiegu: "",

        stomatologData: [],
        zabiegData: []

    }
    
    componentDidMount() {
       /* let daneZalogowanegoKlienta = JSON.parse(localStorage.getItem('daneUzytkownika'));
        if (daneZalogowanegoKlienta) {
            console.log();
            this.setState({
                idKlienta: daneZalogowanegoKlienta._id
            })
        }*/

        axios.get("https://dentalclinic.azurewebsites.net/api/Dentist")
            .then((res) => {
                this.setState({
                    stomatologData: res.data,
                    idStomatologa: res.data[0].id
                })
                
            })
            axios.get("https://dentalclinic.azurewebsites.net/api/Procedure")
            .then((ram) => {
                console.log(ram);
                this.setState({
                    zabiegData: ram.data,
                    idZabiegu: ram.data[0].id
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
        let data = {
            data: this.state.data,
            idKlienta: this.state.idKlienta,
            idStomatologa: this.state.idStomatologa,
            idZabiegu: this.state.idZabiegu,
        }
        
        axios.post("https://dentalclinic.azurewebsites.net/api/Appointment", data)
            .then((res) => {
            })
    }
    render() {
        let stomatologOptions = [];
 
        
        this.state.stomatologData.forEach ((stomatolog) => {
            stomatologOptions.push(
                <option value={stomatolog._id}>{stomatolog.firstname +" " + stomatolog.lastname}</option>
            )
        })

        let ZabiegOptions = [];
        
        this.state.zabiegData.forEach ((zabieg) => {
            ZabiegOptions.push(
                <option value={zabieg._id}>{zabieg.name +" " + zabieg.cost + " zł"}</option>
            )
        })

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                    <div class="row mt-3"></div>
                    <label for="exampleFormControlSelect1">Termin:</label>
                    </div>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDataChange}
                            showTimeSelect
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Id Klienta</label>
                        <input
                            type="string"
                            name="idKlienta"
                            class="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.idKlienta}
                            placeholder="idKlienta"
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Stomatolog:</label>
                        <select class="form-control" value={this.state.idStomatologa} onChange={(e) => this.setState({idStomatologa: e.target.value})}>
                            {stomatologOptions}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Zabieg:</label>
                        <select class="form-control" value={this.state.idZabiegu} onChange={(e) => this.setState({idZabiegu: e.target.value})}>
                            {ZabiegOptions}
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Zarezerwuj wizytę</button>
                </form>
            </div>
        )
    }
}