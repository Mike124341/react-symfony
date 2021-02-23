import React from 'react'

export const DataTable = ({dataList}) => {
    return (
        <div className='dataTable'>
                {console.log(dataList)}
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Voornaam</td>
                        <td>Achternaam</td>
                    </tr>
            </thead>
            <tbody>                    
            {dataList.map(function(slot){
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
