import React from 'react';
import { Feed } from 'semantic-ui-react';
import {  Row, Col } from "reactstrap";
import axios from 'axios';
import { List } from 'semantic-ui-react';
import { getAllValidation} from "../util/APIUtils";

class ListOfValidation extends React.Component {

    state = {
        posts : []
    }
    /*

    componentDidMount(){
        this.setState({
            posts : this.props.validations
        })
     }*/

    componentDidMount(){
        /*getAllValidation(this.props.projectId)
        .then(response => {
            //Alert.success("BLOQUE DE TACHE AJOUTE");
            console.log(response);
            this.setState({
                posts : response//[...this.state.initialState , response]
            });
        }).catch(error => {
            //Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });*/

        


    }
    
  
    render(){
        return(
        <div className="content">
            <Row>
                <Col md="12">
                <List divided relaxed>
                    {this.props.validations.map(post => 
                        <List.Item>
                            <List.Icon name='user' size='large' verticalAlign='middle' />
                                <List.Content>
                                <List.Header as='a'>{post.employee.name}</List.Header>
                                <List.Description as='a'>{post.comment}</List.Description>
                                </List.Content>
                      </List.Item>
                        )}
                </List>
                
                </Col>
            </Row>
        </div>
        );
        
    }
    

    
}

export default ListOfValidation;