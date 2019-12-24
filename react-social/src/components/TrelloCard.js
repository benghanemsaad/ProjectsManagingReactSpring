import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'; 
import { Draggable } from "react-beautiful-dnd";


let styles = {
    cardContainer: {
        marginBottom : 8
    }
}

let backgroundcolor = "" ; 

const TrelloCard = (props) => {

    if(props.comment === "Urgent"){
        styles = {
            cardContainer: {
                marginBottom : 8,
                backgroundColor : "#f44336"
            }
        }
    }else if (props.comment ==="Informatif"){
        styles = {
            cardContainer: {
                marginBottom : 8,
                backgroundColor : "#7e57c2"
            }
        }
    }else if (props.comment ==="Quotidien"){

        styles = {
            cardContainer: {
                marginBottom : 8,
                backgroundColor : "#2196f3"
            }
        }
    }
    return(
        <Draggable draggableId={String(props.id)} index = {props.index}>
            {provided =>(
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card style = {styles.cardContainer}>
                        <CardContent>
                            <Typography gutterBottom>
                            {props.text}
                            </Typography>

                            <Typography gutterBottom>
                            {props.duration}
                            </Typography>

                            <Typography gutterBottom>
                            {props.createdBy}
                            </Typography>

                        </CardContent>

                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue={props.deadlineDateAndhour}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        
                    </Card>
                </div>
            )}
            
        </Draggable>    
    );
}


export default TrelloCard ; 