import React, { Component } from 'react'
import axios from 'axios'

export default class DataTable extends Component {
    constructor() {
        super()
        this.state = {
            dataList: []
        }
        this.getList()
    }

    getList() {
        axios.get('/api/read').then(res => {
            this.setState({dataList: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className='dataTable'>
                <table>
                    {console.log(this.state.dataList)}
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Voornaam</td>
                            <td>Achternaam</td>
                        </tr>
                </thead>
                <tbody>                    
                {this.state.dataList.map(function(slot){
                        return (
                        <tr key={slot.id}>
                            <td>{slot.id}</td>
                            <td>{slot.voornaam}</td>
                            <td>{slot.achternaam}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        )
    }
}
