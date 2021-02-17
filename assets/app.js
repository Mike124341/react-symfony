import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';

// Components
import { Form } from './components/Form';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import { InputForm } from './components/InputForm';


class App extends React.Component {
    re = () => {alert('Heeyyyyy');}

    render() {
        return (
            //<> & </> Zijn react fragments hierdoor komt er geen error
            <>
                <InputForm />
            </>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
