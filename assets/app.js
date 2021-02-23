import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

// Components
import { InputForm } from './components/InputForm';
import { DelForm } from './components/DelForm';
import { DataTable } from './components/DataTable';


// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';
import styles from './styles/app.css';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            dataList: []
        }
        this.getList()
    }

    getList() {
        axios.get('/api/read').then(res => {
            this.setState({dataList: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>  
                <div>
                    <DataTable dataList={this.state.dataList}/>
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
