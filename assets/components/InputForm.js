import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const InputForm = ({ formName, formType, refresh }) => {
    
    // react hook form
    const { register, handleSubmit, errors, } = useForm();

    // onSubmit 
    const onSubmit = data => {
        axios.post('/api/create', data)
        .then(function (response){
             location.reload();
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div id={formName}>
            <h1>{formName}</h1>

            {/* handleSubmit validate de data -- (ref register) */}
            <form name={formName} onSubmit={ handleSubmit(onSubmit) }>

                <div className='form-group'>
                    <label htmlFor='fname'>Voornaam</label>
                    <input className='form-control'
                        name='fname' placeholder='Voornaam' typ='text' ref={register({required: "Veld is verplicht"})}
                    />
                    {/* Error handlets */}
                    {errors.fname && <p>{ errors.fname.message }</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor='lname'>Achternaam</label>
                    <input className='form-control'
                        name='lname' placeholder='Achternaam' typ='text' ref={register({required: "Veld is verplicht"})}
                    />
                    {errors.lname && <p>{ errors.lname.message }</p>}
                </div>

                <div className='form-group'>
                    <label/>
                    <button className='form-control crud-btn' type='submit'>Toevoegen</button>
                </div>

            </form>
        </div>
    )
}