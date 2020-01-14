import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { getAllServices } from "../../util/APIUtils";
import { addService , affecteChefAuService , desaffecteChefAuService } from "../../util/APIUtils";

import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import AddServiceForm from './AddServiceForm';
import ManageEmpInServiceForm from './ManageEmpInServiceForm';
import Alert from 'react-s-alert';


class ServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {services: [],
        modalAdd : false,
        modalEmpUpdate : false,
        updateServiceId  : ""};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        modalAdd: !this.state.modalAdd
    });
    }

    modalUpdateFct= () =>{
        this.setState({modalEmpUpdate : !this.state.modalEmpUpdate})
    }

    addServiceReact = (service) => {
        addService(service)
        .then(response => {
                Alert.success("Service Ajouter");
                this.setState({
                    services     : response
                })
            }
        ).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        })   
    }

    affecteChefReact = (idUser , idService) => {
        affecteChefAuService(idUser,idService).then(response => {
            Alert.success("Chef Affecté");
            this.setState({
                services   : response
            })
        }
        ).catch(error => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
    })  
    }

    desaffecteChefAuServiceReact = (idService) => {
        desaffecteChefAuService(idService).then(response => {
            Alert.success("Chef Désaffecté");
            this.setState({
                services   : response
            })
        }
        ).catch(error => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
    })  
    }
    

    componentDidMount() {
            getAllServices()
            .then(response => {
            this.setState({
                services: response
            });


            }).catch(error => {
            
            }); 
    }


    render() {
        
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success"onClick={this.toggle} >Ajouter Service</Button>
                        <Modal isOpen={this.state.modalAdd} fade={false}
                            
                                >
                                <ModalHeader className="mx-auto modal-header">
                                    Ajouter Service
                                    {this.props.other}
                                </ModalHeader>
                                <ModalBody className="bg-light">
                                    <AddServiceForm addService = {this.addServiceReact } close = {this.toggle }/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                        </Modal>
                    </div>
                    <h3>Services</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">ChefService</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.services.map(service =>
                                    <tr key={service.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{service.name}</td>
                                        <td>{service.chefService ? service.chefService.name : ""}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" onClick={() => {
                                                    this.setState({updateServiceId : service.id ,
                                                        modalEmpUpdate : true})
                                                    }}>Manager les employées</Button>

                                                <Button size="sm" color="danger" onClick = {() => {
                                                    this.desaffecteChefAuServiceReact(service.id);

                                                }}>

                                                Désaffecter Chef </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>  
                            )
                        }
                        </tbody>

                        <Modal isOpen={this.state.modalEmpUpdate} fade={false}
                                 className={"my-modal-custom-class"}
                                 initWidth={1200}  >
                                <ModalHeader className="mx-auto modal-header">
                                    Manager Les employées
                                    {this.props.other}
                                </ModalHeader>
                                <ModalBody className="bg-light">
                                    <ManageEmpInServiceForm addService = {this.addServiceReact } close = {this.modalUpdateFct } serviceId = {this.state.updateServiceId}
                                    affectChef = {this.affecteChefReact}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.modalUpdateFct}>Cancel</Button>
                                </ModalFooter>
                        </Modal>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ServiceList; 
