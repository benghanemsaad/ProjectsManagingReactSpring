import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAllUsers } from "../../util/APIUtils";


class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
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


    render() {
        
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/users/new">Add User</Button>
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
                                                <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Edit</Button>
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
