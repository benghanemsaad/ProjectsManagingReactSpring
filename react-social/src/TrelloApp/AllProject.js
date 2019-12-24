import React from 'react';
import { getAllProjects } from "../util/APIUtils";
import ProjectCard from './ProjectCard';





export default class AllProject extends React.Component{

    state = {
        projects : []
    }


    loadProjects = () => {
        getAllProjects()
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

    componentDidMount(){
        this.loadProjects();
    }

    render(){
        return(
            <div>
            <h1>All Projects</h1>
            {this.state.projects.map(
                project => <ProjectCard description = {project.description} id = {project.id} budget= {project.budget} duree= {project.duree} />
                )}
            </div>
        );
    }
};