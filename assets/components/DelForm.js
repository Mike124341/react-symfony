import React, {useState, useEffect} from 'react';

import { useForm } from 'react-hook-form';

export const DelForm = ({ formName, formType }) => {
    const [message, setMessage] = useState([]);
    // react hook form
    const { register, handleSubmit, errors, } = useForm();

    // onSubmit 
    const onSubmit = data => {
        axios.post('/api/delete', data)
        .then(function (response){
            // console.log(response)
            setMessage(response);
            // console.log(message)
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
                    <label htmlFor='id'> Gebruiker id </label>
                    <input className='form-control'
                        name='id' placeholder='id' typ='number' ref={register({required: "Veld is verplicht"})}
                    />
                    {/* Error handlets */}
                    {errors.fname && <p className='danger'>{ errors.fname.message }</p>}
                    <label/>
                    <button className='form-control' type='submit'>Verwijderen</button>
                    <p>{message.data}</p>
                </div>
            </form>
        </div>
    )
}