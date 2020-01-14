import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAllUsers } from "../../util/APIUtils";
import { addUser } from "../../util/APIUtils";
import Alert from 'react-s-alert';

import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import AddUserForm from './AddUserForm';


class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [],
        modal : false
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({modal: !this.state.modal});
    }

    componentDidMount() {
            getAllUsers()
            .then(response => {
                console.log("this our response " + response);
            this.setState({
                users: response
            });
            console.log("this our users" + this.state.users);

            }).catch(error => {
            
            }); 
    }


    addUserReact = (user) => {
        addUser(user)
        .then(response => {
                Alert.success("User Ajouter");
                this.setState({
                    users : response
                })
            }
        ).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        })   
    }
    
    render() {
        
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success"  onClick={ this.toggle}>Add User</Button>
                        <Modal isOpen={this.state.modal} fade={false}
                            toggle={this.toggle} >
                            <ModalHeader className="mx-auto modal-header">
                                Ajouter Utilisateur
                                {this.props.other}
                            </ModalHeader>
                            <ModalBody className="bg-light">
                                <AddUserForm addUser = {this.addUserReact } close = {this.toggle } />
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <h3>Users</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Email</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(user =>
                                    <tr key={user.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" >Edit</Button>
                                                <Button size="sm" color="danger" onClick={() => this.remove(user.id)}>Delete</Button>
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

export default UserList;
