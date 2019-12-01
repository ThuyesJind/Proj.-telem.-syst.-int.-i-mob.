import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../node_modules/@fullcalendar/core/main.css';
import axios from 'axios';

export default class Grafik extends Component {
    state = {
        idZalogowanego: "",
        wizytyData: [],
        Stomatolog: "",
        Zabieg: "",
        wizyty: []
    }
    componentDidMount(){
        axios.get("https://dentalclinic.azurewebsites.net/api/Appointment")
            .then((res) => {
                this.setState({
                    wizytyData: res.data
                })
            })      
       
    }
funkcja(){
    //let wizyty  = [];
    this.state.wizytyData.forEach ((wizyta) => { 
        axios.get("https://dentalclinic.azurewebsites.net/api/Dentist/" + wizyta.dentistId )
        .then((res) => {
            this.setState({
                Stomatolog: res.data.firstname + " " + res.data.lastname
            })
        })
        axios.get("https://dentalclinic.azurewebsites.net/api/Procedure/" + wizyta.procedureId )
        .then((res) => {
            this.setState({
                Zabieg: res.data.name
            })
        })
            this.state.wizyty.push(
                 this.state.Zabieg +  " " + this.state.Stomatolog + " " + wizyta.date
            )                   
    })
}

    render() {
        this.funkcja();
        
        return (
            <React.Fragment>
              <ul className="list-group">
                {this.state.wizyty.map(wizyta1 => (
                  <li className="list-group-item list-group-item-primary">
                    {wizyta1}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          );
    }
}