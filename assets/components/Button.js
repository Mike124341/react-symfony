import React from 'react'
import PropTypes from 'prop-types'


export const Button = ({color, text, type, onClick}) => {
    return (
        <button className='form-control' onClick={onClick} type={type} style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

//Set de normaal waarden van de props
Button.defaultProps = {
    color: 'white',
    text: 'verzenden',
    type: 'submit',
}

//Defineer de data type van de props
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
}