import React, { Component } from 'react';
import '../node_modules/@fullcalendar/core/main.css';
import axios from 'axios';

export default class Grafik extends Component {
    state = {
        idZalogowanego: "",
        wizytyData: [],
        Stomatolog: "",
        Zabieg: "",
        wizyty: [],
        renderedWizyty: [],
    }
    async componentDidMount() {
        let id = localStorage.getItem('id')
        console.log(id);
        
        axios.get("https://dentalclinic.azurewebsites.net/api/Appointment")
            .then((res) => {
                this.setState({
                    wizytyData: res.data
                })
                console.log(this.state.wizytyData);
                var MyPromise = new Promise((resolve, reject) => {
                    this.state.wizytyData.forEach(async (wizyta, index, array) => {
                        if(wizyta.patientId == id)
                        {
                        let data1 = await axios.get("https://dentalclinic.azurewebsites.net/api/Dentist/" + wizyta.dentistId);
                        let stomatolog = data1.data.firstname + " " + data1.data.lastname;
                        let data2 = await axios.get("https://dentalclinic.azurewebsites.net/api/Procedure/" + wizyta.procedureId);
                        let zabieg = data2.data.name;
                        console.log(stomatolog + " " + zabieg);

                        this.state.wizyty.push(

                            zabieg + " " + stomatolog + " " + wizyta.date
                        )
                        console.log(this.state.wizyty);
                        if (index === array.length - 1) resolve();
                        }
                    });
                });

                MyPromise.then(() => {
                    console.log(this.state.wizyty);
                    const wizyty = this.state.wizyty.map(wizyta => (
                        <li className="list-group-item list-group-item-primary">
                            {wizyta}
                        </li>
                    ))
                    console.log(wizyty);

                    this.setState({
                        renderedWizyty: wizyty
                    })
                });
            })
    }

    render() {
        const wizyty = this.state.wizyty.map(wizyta => (
            <li className="list-group-item list-group-item-primary">
                {wizyta}
            </li>
        ))
        console.log(wizyty);

        return (
            <React.Fragment>
                <ul className="list-group">
                    {this.state.renderedWizyty}
                </ul>
            </React.Fragment>
        );
    }
}