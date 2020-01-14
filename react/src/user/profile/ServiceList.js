import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAllServices } from "../../util/APIUtils";


class ServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {services: []};
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
                        <Button color="success" >Ajouter Service</Button>
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
                                        <td>{service.email}</td>

                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="info" >Manager Les employées</Button>
                                                <Button size="sm" color="primary" onClick={() => this.remove(service.id)}>Manager les projets</Button>
                                                <Button size="sm" color="danger" onClick={() => this.remove(service.id)}>Delete</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>  
                            )
                        }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ServiceList; 
