import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../node_modules/@fullcalendar/core/main.css';
import axios from 'axios';

export default class Grafik extends Component {
    state = {
        idZalogowanego: "",
        wizytyData: [],
    }
    componentDidMount(){
        /*
        let daneZalogowanegoKlienta = JSON.parse(localStorage.getItem('daneUzytkownika'));
        if (daneZalogowanegoKlienta) {
            console.log();
            this.setState({
                idZalogowanego: daneZalogowanegoKlienta._id
            });
        }*/
        axios.get("https://dentalclinic.azurewebsites.net/api/Appointment")
            .then((res) => {
               // console.log(res.data);
                this.setState({
                    wizytyData: res.data
                })
                //console.log(this.state.wizytyData);
            });

        
    }
    render() {
        let wizyty = [];
        this.state.wizytyData.forEach ((wizyta) => { 
            console.log(wizyta);
                wizyty.push(
                    { title: wizyta.dentistId,  date: new Date(wizyta.date)}
                )                   
        });
        return (
            <div>
                <h1>Kalendarz</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <FullCalendar 
                            defaultView="dayGridMonth" 
                            plugins={[ dayGridPlugin ]} 
                            events={wizyty}
                        />

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}