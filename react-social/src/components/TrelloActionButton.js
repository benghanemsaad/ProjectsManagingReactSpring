import React from "react" ;
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { addList ,addCard } from "../actions";
import Alert from 'react-s-alert';
import { addTaskToFlow } from "../util/APIUtils";
import { addTaskflow } from '../util/APIUtils';
import  { Redirect } from 'react-router-dom'

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class TrelloActionButton extends React.Component {

    state ={
        formOpen : false ,
        text : "",
        duration : 0 ,
        deadline : ""
    };

    openForm = () => {
        this.setState({
            formOpen : true
        });
    };

    closeForm = (e) =>{
        this.setState({
            formOpen : false
        });
    };
    handleInputChangeText = e =>{
        this.setState({
            text : e.target.value 
        })
    }

    handleInputChangeDuration = e =>{
        this.setState({
            duration : e.target.value 
        })
    }

    handleInputChangeDeadline = e =>{
        this.setState({
            deadline : e.target.value
        })
    }

    handleAddList =() =>{
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text){
            this.setState({
                text : ""
            });
            dispatch(addList(text));

            const taskflow = {
                text : text
            }

            addTaskflow(taskflow)
                .then(response => {
                    Alert.success("BLOQUE DE TACHE AJOUTE");
                }).catch(error => {
                    Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
                });
                
        }

        return;
    }

    handleAddCard =() =>{
        const { dispatch , listID , load } = this.props;
        const { text , duration , deadline } = this.state;
        if(text){
            this.setState({
                text : "",
                duration :"",
                deadline : ""
            });
            dispatch(addCard(listID,text,duration,deadline));
            const newCard = {
                text : this.state.text,
                deadlineDateAndhour: this.state.deadline,
                duration : this.state.duration,
                createdBy : "Admin",
                state :"Etat",
                comment :"Info" 
            };

            

            addTaskToFlow(newCard , listID)
                .then(response => {
                    Alert.success("TACHE AJOUTEE");
                }).catch(error => {
                    Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
                });




        }

        return;
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Ajouter Une Autre Liste Des Tâches" : "Ajouter Une Autre Tâche";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ?  "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
                onClick={this.openForm}
                    style={{
                        ...styles.openFormButtonGroup,
                        opacity : buttonTextOpacity, 
                        color : buttonTextColor , 
                        background : buttonTextBackground
                        }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Entrer le libellé de La liste..." : "Entrer la description de la tâche...";
        const buttonTitle = list ? "Ajoutez Liste" : "Ajoutez Tâche";
        const style = {
            textarea : {
                resize : "none",
                width : "100%",
                outline : "none",
                border : "none",
                height : "10%",
                overFlow : "hidden"
            },
            textfield :{
                width : "100%",
                padding : 10
            },
            card : {
                overFlow : "visible",
                minHeight : 80 ,
                minWidth : 272,
                padding : "6px 8px 2px"
            }
        }

        if(!list){
            return(
                <div>
                    <Card style = {style.Card}>
                        <Textarea
                            placeholder={placeholder}
                            autoFocus
                            value = {this.state.text}
                            onChange = {this.handleInputChangeText}
                            style = {style.textarea}
                        />
    
                        <TextField
                            id="formatted-numberformat-input"
                            label="Durée estimée(HEURE)"
                            type="number"
                            defaultValue=""
                            InputProps={{
                            shrink: true,
                            }}
                            style = {style.textfield}
                            value = {this.state.duration}
                            onChange = {this.handleInputChangeDuration}
                        />
    
                        
                         <TextField
                            id="datetime-local"
                            label="Deadline TIME"
                            type="datetime-local"
                            defaultValue=""
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onBlur={this.closeForm}
                            style = {style.textfield}
                            value = {this.state.deadline}
                            onChange = {this.handleInputChangeDeadline}
                        />
                    </Card>
                    
                    <div style = {styles.formButtonGroup}>
                        <Button onMouseDown={this.handleAddCard}
                        variant="contained" style = {{color : "white" , backgroundColor : "#5aac44"}} >
                            {buttonTitle}
                        </Button>
                        <Icon style={{ marginLeft : 8 , cursor : "pointer"}}>close</Icon>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <Card>
                        <Textarea
                            placeholder={placeholder}
                            autoFocus
                            onBlur={this.closeForm}
                            value = {this.state.text}
                            onChange = {this.handleInputChangeText}
                            style = {style.textarea}
                         />
                    </Card>
                    <div style = {styles.formButtonGroup}>
                        <Button 
                        onMouseDown={this.handleAddList}
                        variant="contained" style = {{color : "white" , backgroundColor : "#5aac44"}} >
                            {buttonTitle}
                        </Button>
                        <Icon style={{ marginLeft : 8 , cursor : "pointer"}}>close</Icon>
                    </div>
                </div>
            );
            
        }

        
        
    };

    render(){
        return  this.state.formOpen ? this.renderForm() : this.renderAddButton() ;
    }
}

const styles = {
    openFormButtonGroup:{
        display : "flex",
        alignItems:"center",
        cursor : "pointer",
        borderRadius: 3 ,
        height : 36,
        width : 272,
        paddingLeft:10
    },
    formButtonGroup:{
        marginTop:8,
        display : "flex",
        alignItems: "center"
    }
}


export default connect()(TrelloActionButton) ;