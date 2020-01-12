import React from "react" ;
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { addList ,addCard } from "../actions";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class TrelloActionButton extends React.Component {

    state ={
        formOpen : false ,
        text : "",
        duration : 0 ,
        deadline : "",

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
                title : text,
                cards : []
            }

                this.props.laFonction(taskflow);

            
        }

        return;
    }

    handleAddCard =() =>{
        const { dispatch , listID } = this.props;
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
                deadLineDateAndhour: this.state.deadline,
                duration : this.state.duration,
                createdBy : this.props.email,
                state :"Etat",
                comment :this.state.comment 
            };
            this.props.laFonction2(newCard , listID);
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
                        background : buttonTextBackground,
                        height : 60
                        }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    handleSelect = (e) =>{
        this.setState({
            comment : e.target.value 
        })
    }

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
                            style = {style.textfield}
                            value = {this.state.deadline}
                            onChange = {this.handleInputChangeDeadline}
                        />

                            <InputLabel id="label">comment</InputLabel>
                            <Select labelId="label" id="select" value={this.state.comment} onChange = {this.handleSelect} style={{margin : 10}}>
                            <MenuItem value="Urgent">Urgent</MenuItem>
                            <MenuItem value="Quotidien">Quotidien</MenuItem>
                            <MenuItem value="Informatif">Informatif</MenuItem>
                            </Select>
         
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