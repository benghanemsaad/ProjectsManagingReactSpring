import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'; 
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom' ;
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from 'semantic-ui-react';




const ProjectCard = (props) => {
    const link = "/project/" + props.id ; 
    console.log("emps");
    console.log(props.emps);
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

                <Typography gutterBottom>
                <h4>Qui ont voté  : </h4>
                {
                    props.emps.validations.map(
                        validation => 
                        <div>
                            <Avatar>
                                {validation.employee.name.charAt(0)}
                            </Avatar>
                            <span>{validation.employee.name}</span>

                            {iconValidation(validation.validation)}
                        </div>
                    )
                }
                
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

const iconValidation = (validation) => {

    if(validation){
        return  <Icon name='check' size='large' verticalAlign='middle' /> ;
    }else{
        return <Icon name='ban' size='large' verticalAlign='middle' /> ;
    }
    
}


export default ProjectCard ; 