import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'; 
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom' ;
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';




const ProjectCard = (props) => {
    const link = "/project/" + props.id ; 
    return(
        <Card style = {{margin : 20 }}>
            <CardContent>
                <Typography gutterBottom>
                Description : {props.description}
                </Typography>

                <Typography gutterBottom>
                Budget : {props.budget}
                </Typography>
                <Typography gutterBottom>
                Durée Estimée : {props.duree}
                </Typography>
                <Typography gutterBottom>
                Crée Par : <Avatar>{props.createdBy.charAt(0)}</Avatar>
                {props.createdBy}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={link} >
                <Button type="button" variant="contained" color="primary" >
                    Explorer 
                </Button>
            </Link>
            </CardActions>
    </Card>
    );
}


export default ProjectCard ; 