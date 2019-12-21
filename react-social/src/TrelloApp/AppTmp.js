import React , { Component } from "react";
import App from "./App";

import store from '../store';

import { Provider } from 'react-redux';

class AppTmp extends Component{
    render(){
        return(
            <Provider store={store}>
                        <App/>
            </Provider>
        );
    }
}


export default AppTmp ; 
 