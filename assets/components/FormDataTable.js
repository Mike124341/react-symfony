import React, { Component } from 'react'
import axios from 'axios';


export default class FormDataTable extends Component {

    state = {
        gebruikers: [],
    }

    componentDidMount() {
        axios.get('/api/read').then(res => {
            console.log(res);
            this.setState({ gebruikers: res.data });
        });
    }

    render() {
        return(
            <ul>
                {this.state.gebruikers.map(gebruikers => <li>{gebruikers.voornaam}</li>)}
            </ul>
        );
    }
}
