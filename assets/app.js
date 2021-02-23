import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';

// Components
import { InputForm } from './components/InputForm';
import { DelForm } from './components/DelForm';
import DataTable from './components/DataTable';


// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';
import styles from './styles/app.css';



class App extends React.Component {
    re = () => {alert('Heeyyyyy');}

    render() {
        return (
            <>  
                <div>
                    <DataTable />
                </div>

                <div className='form1'>
                    <InputForm formName='Create'/>
                    <DelForm formName='Delete'/>
                </div>
            </>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
