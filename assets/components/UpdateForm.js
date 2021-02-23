import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const UpdateForm = ({ formName, handleRead }) => {
    const [message, setMessage] = useState([]);
    // react hook form
    const { register, handleSubmit, errors, } = useForm();

    // onSubmit 
    const onSubmit = data => {
        axios.post('/api/update', data)
        .then(function (response){
            setMessage(response);
            handleRead()
        })
        .catch(function (error) {
           console.error(error);
        });
    }
    return (

        <div id={formName}>
            <h1>{formName}</h1>

            {/* handleSubmit validate de data -- (ref register) */}
            <form name={formName} onSubmit={ handleSubmit(onSubmit) }>

                <div className='form-group'>

                    <label htmlFor='Up_id'> Gebruiker id </label>
                    <input className='form-control'
                        name='Up_id' placeholder='Bijv. 7' typ='number' ref={register({required: "Veld is verplicht"})}
                    />
                    {errors.id && <p>{ errors.id.message }</p>}
                </div>

                <div className='form-group'>

                    <label htmlFor='UP_fname'> Nieuwe voornaam gebruiker</label>
                    <input className='form-control'
                        name='UP_fname' placeholder='Jan' typ='text' ref={register({required: "Veld is verplicht"})}
                    />
                    {errors.UP_fname && <p>{ errors.UP_fname.message }</p>}
                </div>

                <div className='form-group'>

                    <label htmlFor='UP_lname'> Nieuwe achternaam gerbuiker</label>
                    <input className='form-control'
                        name='UP_lname' placeholder='Idema' typ='text' ref={register({required: "Veld is verplicht"})}
                    />
                    {/* Error handlets */}
                    {errors.UP_lname && <p>{ errors.UP_lname.message }</p>}
                </div>

                <div className='form-group'>

                    <label/>
                    <button className='form-control' type='submit'>Verwijderen</button>
                    <p>{message.data}</p>
                </div>

            </form>
        </div>
    )
}