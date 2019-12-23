import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'; 

const styles = {
    cardContainer: {
        marginBottom : 8
    }
}

const TrelloCard = (props) => {
    return(
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
    );
}


export default TrelloCard ; 