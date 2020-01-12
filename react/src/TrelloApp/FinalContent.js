import React , { Component } from "react";
import { Result, Icon, Button } from 'antd';

class FinalContent extends Component {	


    render(){
        return(
            <Result
                icon={<Icon type="smile" theme="twoTone" />}
                title="Bien,Êtes-vous sûr?"
            />
        )
            
        
    }
}


export default FinalContent;
