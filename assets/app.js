import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

// Components
import { InputForm } from './components/InputForm';
import { DelForm } from './components/DelForm';
import { DataTable } from './components/DataTable';
import { UpdateForm } from './components/UpdateForm';


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
        this.getList = this.getList.bind(this);
    }

    getList() {
        axios.get('/api/read').then(res => {
            this.setState({dataList: res.data})
            console.log(this.state.dataList)
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
                <hr/>
                <div className='form1'>
                    <InputForm handleRead={this.getList} formName='Create'/>
                    <UpdateForm handleRead={this.getList} formName='Update' />
                    <DelForm handleRead={this.getList} formName='Delete'/>
                </div>
            </>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
