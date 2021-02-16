import React from 'react'
import PropTypes from 'prop-types'


export const InputField = ({type, name, placeHolder, label}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input className='form-control' placeholder={placeHolder} type={type} name={name}></input>
        </>
    )
}

//Set de normaal waarden van de props
InputField.defaultProps = {
    type: 'text',
    name: 'default',
    placeHolder: 'Hier typen',
}

//Defineer de data type van de props
InputField.propTypes = {
    type : PropTypes.string,
    name : PropTypes.string,
    placeHolder : PropTypes.string,
}