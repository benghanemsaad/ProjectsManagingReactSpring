import React from 'react';
import { getAllProjects } from "../util/APIUtils";
import ProjectCard from './ProjectCard';
import { Header} from 'semantic-ui-react';





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
            <Header as='h3' block>
                All Projects
            </Header>
            {this.state.projects.map(
                project => <ProjectCard emps={project} createdBy = {project.createdBy} description = {project.description} id = {project.id} budget= {project.budget} duree= {project.duree} />
                )}
            </div>
        );
    }
};