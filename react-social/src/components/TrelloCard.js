import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'; 
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


    let  CardContainer = "";


let backgroundcolor = "" ; 

const TrelloCard = (props) => {

    if(props.comment === "Urgent"){

        CardContainer = styled.div`
            margin-bottom : 8px;
            background-color : #f44336;
        `;
    }else if (props.comment ==="Informatif"){
        CardContainer = styled.div`
            margin-bottom : 8px;
            background-color : #7e57c2;
        `;
    }else if (props.comment ==="Quotidien"){

        CardContainer = styled.div`
            margin-bottom : 8px;
            background-color : #2196f3;
        `;
      
    }
    return(
        <Draggable draggableId={String(props.id)} index = {props.index}>
            {provided =>(
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <CardContainer>
                        <CardContent>
                            <Typography gutterBottom>
                            Le nom de la tâche : {props.text}
                            </Typography>

                            <Typography gutterBottom>
                            Durée éstimée : {props.duration}
                            </Typography>

                            <Typography gutterBottom>
                            Crée par : {props.createdBy}
                            </Typography>

                        </CardContent>

                        <TextField
                            id="datetime-local"
                            label="Le Délai Final"
                            type="datetime-local"
                            style={{
                                margin : 20
                            }}
                            defaultValue={props.deadlineDateAndhour}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        
                    </CardContainer>
                </div>
            )}
            
        </Draggable>    
    );
}


export default TrelloCard ; 