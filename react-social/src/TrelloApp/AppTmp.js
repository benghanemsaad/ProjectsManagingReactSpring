import React , { Component } from "react";
import App from "./App";

import store from '../store';

import { Provider } from 'react-redux';

class AppTmp extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    
    render(){
        return(
            <Provider store={store}>
                        <App currentUser={this.props.currentUser} />
            </Provider>
        );
    }
}


export default AppTmp ; 
 