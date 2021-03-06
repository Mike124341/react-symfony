import React from 'react'
// import { useForm } from 'react-hook-form';

// Components
import { Button } from './Button';
import { InputField } from './InputField';

export const Form = ({label1, label2, name1, name2, type1, type2, holder1, holder2, btnColor, btnTxt, action}) => {

    return (
        <form action={action}>
            <div className='form-group'>
                    <InputField label={label1} name={name1} type={type1} placeHolder={holder1}/>
            </div>

            <div className='form-group'>
                <InputField label={label2} name={name2} type={type2} placeHolder={holder2}/>
            </div>  

            <br></br> 
             
            <div className='form-group'>    
                    <Button color={btnColor} text={btnTxt}/> 
            </div>
        </form>
    )
}
