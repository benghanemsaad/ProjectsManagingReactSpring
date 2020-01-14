import React from 'react';
import { getAllProjects , getCurrentUser , addNewProject } from "../util/APIUtils";
import ProjectCard from './ProjectCard';
import { Header} from 'semantic-ui-react';
import { Button } from 'reactstrap';
import AddProjectForm from './AddprojectForm';
import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import Alert from 'react-s-alert';





export default class AllProject extends React.Component{

    state = {
        projects : [] , 
        currentuser : {}
    }

    constructor(props) {
        super(props);
        this.state = {projects: [],
            currentuser : {},
        modal : false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
    });
    }

    addNewProjectReact = (projet) => {
        addNewProject(projet).then(response => {
            this.setState({
                projects: response,
            });
            Alert.success("Projet Ajouté!");
            }).catch(error => {
            this.setState({
                loading: false
            });  
            }); 
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

            getCurrentUser().then(response => {
                this.setState({
                    currentuser: response,
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
                All Projects <Button size="sm" color="info" style={{ position : "relative" , float: "right"}} onClick={this.toggle}>Ajouter Projet</Button>
            </Header>
            {this.state.projects.map(
                project => <ProjectCard emps={project} createdBy = {project.createdBy} description = {project.description} id = {project.id} budget= {project.budget} duree= {project.duree} />
                )}

                        <Modal isOpen={this.state.modal} fade={false}
                             >
                            <ModalHeader className="mx-auto modal-header">
                                Ajouter Projet
                                {this.props.other}
                            </ModalHeader>
                            <ModalBody className="bg-light">
                                <AddProjectForm currentUser = {this.state.currentuser.email } close = {this.toggle } userId = {this.state.updateUserId}
                                addProject = {this.addNewProjectReact}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
            </div>
        );
    }
};