import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useForm } from 'react-hook-form';

export const DelForm = ({ formName, formType }) => {
    
    // react hook form
    const { register, handleSubmit, errors, } = useForm();

    // onSubmit 
    const onSubmit = data => {
        axios.post('/api/delete', data)
        .then(function (response){
            console.log(response)
        }).catch(function (error) {
           console.error(error);
        });
    }
    return (
        <div className='form1'>
            <h1>{formName}</h1>

            {/* handleSubmit validate de data -- (ref register) */}
            <form name={formName} onSubmit={ handleSubmit(onSubmit) }>

                <div className='form-group'>
                    <label htmlFor='id'>id</label>
                    <input className='form-control'
                        name='id' placeholder='id' typ='number' ref={register({required: "Veld is verplicht"})}
                    />
                    {/* Error handlets */}
                    {errors.fname && <p className='danger'>{ errors.fname.message }</p>}
                </div>

                <div className='form-group'>
                    <label/>
                    <button className='form-control' type='submit'>Verzenden</button>
                </div>

            </form>
        </div>
    )
}