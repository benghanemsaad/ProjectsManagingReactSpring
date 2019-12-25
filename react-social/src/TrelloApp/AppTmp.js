import React , { Component } from "react";
import App from "./App";

import store from '../store';

import { Provider } from 'react-redux';

class AppTmp extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        console.log("id params") ; 
        console.log(this.props.match.params.id);
    }

    

    
    render(){
        return(
            <Provider store={store}>
                        <App currentUser={this.props.currentUser} id={this.props.match.params.id} />
            </Provider>
        );
    }
}


export default AppTmp ; 
 