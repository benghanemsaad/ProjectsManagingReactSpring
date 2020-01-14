import React from "react";
import {  Input, Select, Button,Icon } from 'antd';
import { getAllUsersWithoutService } from "../../util/APIUtils";
import { getAllUsersInService } from "../../util/APIUtils";
import { addUserToService , deleteUserFromService , getAllChefsWithoutService} from "../../util/APIUtils";
import { ButtonGroup, Table } from 'reactstrap';



class AddServiceForm extends React.Component {

    state = {
        name : "",
        empInService : [],
        empWithoutService : [],
        chefNotAffected : [],
        serviceId : this.props.serviceId
    }


    componentDidMount() {
        getAllUsersWithoutService()
        .then(response => {
        this.setState({
            empWithoutService: response
        });

        }).catch(error => {
        
        }); 

        getAllUsersInService(this.state.serviceId)
        .then(response => {
        this.setState({
            empInService: response
        });

        }).catch(error => {
        
        }); 

        getAllChefsWithoutService()
        .then(response => {
            this.setState({
                chefNotAffected: response
            });
    
            }).catch(error => {
            
            }); 
}

addUserToServiceReact(serviceId , userId){
    addUserToService(serviceId,userId)
        .then(response => {
        this.setState({
            empInService: response
        });
        this.updateUserWithoutService();

        }).catch(error => {
        
        }); 
        
}

deleteUserFromServiceReact(serviceId , userId){
    deleteUserFromService(serviceId,userId)
        .then(response => {
        this.setState({
            empInService: response
        });
        this.updateUserWithoutService();

        }).catch(error => {
        
        }); 
        
}

updateUserWithoutService(){
    getAllUsersWithoutService()
        .then(response => {
        this.setState({
            empWithoutService: response
        });
        }).catch(error => {
        
        });

        getAllUsersInService(this.state.serviceId)
        .then(response => {
        this.setState({
            empInService: response
        });

        }).catch(error => {
        
        }); 
    
}

  handleNameChange = e => {
    this.setState({
        name : e.target.value
    })
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addService({
        name : this.state.name,
        });
      this.props.close();
  }


  render() {
    return (
        <div style={{
            margin : 40,
            width : "50%" , 
            display : "block",
            marginLeft : "auto",
            marginRight : "auto",
        }}>
                    <h3>Employées non affectés</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.empWithoutService.map(user =>
                                    <tr key={user.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>

                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" onClick={() => {this.addUserToServiceReact(this.state.serviceId , user.id)
                                                }}>Ajouter A Ce Service</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>  
                            )
                        }
                        </tbody>
                        </Table>

                        <h3>Employées de ce service</h3>
                            <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.empInService.map(user =>
                                    <tr key={user.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>

                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" onClick={() => {
                                                    this.setState({updateServiceId : user.id ,
                                                        modalEmpUpdate : true});
                                                        this.deleteUserFromServiceReact(this.state.serviceId , user.id);
                                                    }}>Supprimer de ce Service</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>  
                            )
                        }
                        </tbody>
                        </Table>

                        

                        <h3>Chefs non affectés </h3>
                            <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.chefNotAffected.map(user =>
                                    <tr key={user.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>

                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" onClick={() => {
                                                    this.setState({updateServiceId : user.id ,
                                                        modalEmpUpdate : true});
                                                        this.props.affectChef( user.id,this.state.serviceId );
                                                        this.props.close();
                                                    }}>Affecter ce Chef au Service</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>  
                            )
                        }
                        </tbody>
                        </Table>
        </div>
   
    );
  }
}



export default AddServiceForm ; 