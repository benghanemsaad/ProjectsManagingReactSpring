import React from 'react';
import { getAllProjectsAdmin , approuveProject,desapprouveProject } from "../../util/APIUtils";
import ProjectCardAdmin from './ProjectCardAdmin';

import { Header} from 'semantic-ui-react';
import Alert from 'react-s-alert';


export default class AllProject extends React.Component{

    state = {
        projects : []
    }

    loadProjects = () => {
        getAllProjectsAdmin()
            .then(response => {
            this.setState({
                projects: response,
            });
            }).catch(error => {
            this.setState({
                loading: false
            });  
            }); 
    }

    approveProjectReact = (idProject) =>{
        approuveProject(idProject).then(response => {
            this.setState({
                projects: response,
            });
            Alert.success("Projet approuvé");
            }).catch(error => {
            this.setState({
                loading: false
            });  
            }); 
    }

    desapproveProjectReact = (idProject) =>{
        desapprouveProject(idProject).then(response => {
            this.setState({
                projects: response,
            });
            Alert.success("Projet Desapprouvé");
            }).catch(error => {
            this.setState({
                loading: false
            });  
            }); 
    }



    componentDidMount(){
        this.loadProjects();
    }

    render(){
        return(
            <div>
            <Header as='h3' block>
                All Projects
            </Header>
            {this.state.projects.map(
                project => <ProjectCardAdmin emps={project} createdBy = {project.createdBy} description = {project.description} id = {project.id} budget= {project.budget} duree= {project.duree} approuved = {project.approuved} 
                fctApprouve = {this.approveProjectReact} fctDesapprouve = {this.desapproveProjectReact} />
                )}
            </div>
        );
    }
};