import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';

// Components
import { InputForm } from './components/InputForm';
import { DelForm } from './components/DelForm';
import DataTable from './components/DataTable';


// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';


class App extends React.Component {
    re = () => {alert('Heeyyyyy');}

    render() {
        return (
            //<> & </> Zijn react fragments hierdoor komt er geen error
            <>
                {/* <tabletest /> */}
                <DataTable />
                <InputForm formName='create'/>
                <DelForm formName='Delete'/>
            </>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
