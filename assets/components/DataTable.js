import React from 'react'

export const DataTable = ({dataList}) => {
    return (
        <div className='dataTable'>
            <h1>Gebruikers tabel</h1>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Voornaam</td>
                        <td>Achternaam</td>
                    </tr>
            </thead>
            <tbody>                    
            {dataList.map(function(data){
                    return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.voornaam}</td>
                        <td>{data.achternaam}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    )
}
