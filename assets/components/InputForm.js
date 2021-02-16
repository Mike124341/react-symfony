import React from 'react';

import { useForm } from 'react-hook-form';

export const InputForm = () => {
    
    // react hook form
    const { register, handleSubmit, errors } = useForm();

    // onSubmit 
    const onSubmit = data => document.getElementById("data").innerHTML = data.fname + ' ' + data.lname;

    return (
        <div className='form1'>
            <h1>Form 2</h1>

            {/* handleSubmit validate de data -- (ref register) */}
            <form onSubmit={ handleSubmit(onSubmit) }>

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
                    <button className='form-control' type='submit'>Verzenden</button>
                </div>

            </form>
        </div>
    )
}
