import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

class Toggle extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isToggleOn: true,
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() { 
        return ( 
            
        <button className= 'btn btn-primary btn-lg col-md-12' onClick= {this.handleToggle}>
            { this.state.isToggleOn? 'ON' : 'OFF'}
        </button>
         );
    }
}
 
export default Toggle;


ReactDOM.render(<Toggle />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
