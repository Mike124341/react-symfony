import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';

// Components
import { Form } from './components/Form';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';


class App extends React.Component {
    re = () => {alert('Heeyyyyy');}

    render() {
        return (
            //<> & </> Zijn react fragments hierdoor komt er geen error
            <div className='form1'>
                <h1>form</h1>
                <Form
                    label1='Voornaam' label2='Achternaam' name1='fname' name2='lname'
                    holder1='Voornaam' holder2='Achternaam' type1='text' type2='text'
                    btnType='submit' btnColor='Gold' btnTxt='Versturen' onSubmit={this.re}
                />
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
