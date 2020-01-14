import React, { Component } from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import './Profile.css';
import AdminContent from './AdminContent';
import { updateMyProfile } from "../../util/APIUtils";
import Alert from 'react-s-alert';

import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";
import UpdateMyProfileForm from './UpdateMyProfileForm';

class Profile extends Component {
   
    state = {
        name : this.props.currentUser.name ,
        email : this.props.currentUser.email ,
        role : this.props.currentUser.role ,
        id : this.props.currentUser.id ,
        modalUpdate : false ,
        updateUserId : this.props.currentUser.id
    }

    modalUpdateFct= () =>{
        this.setState({modalUpdate : !this.state.modalUpdate})
    }

    updateUserReact = (user , idUser) => {
        updateMyProfile(user,idUser)
        .then(response => {
                Alert.success("Profil modifié");
                this.setState({
                    name : response.name ,
                    email : response.email ,
                    role : response.role ,
                    id : response.id ,
                    updateUserId : response.id
                })
            }
        ).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        })   
    
    }



    affichage(role){
        if(role === "Admin"){
            return(
                <div>
                    <div
                            style={{
                            backgroundColor: '#F5F5F5',
                            padding: 24,
                            }}
                        >
                            <PageHeader
                            ghost={false}
                            title="Page Dashbord"

                            extra={[
                                <Button key="1" type="primary" onClick={() => {
                                    this.setState({
                                    modalUpdate : true})}} >
                                  Editer Mon Profil
                                </Button>,
                              ]}
                            
                            >
                                <Descriptions size="small" column={3}>
                                    <Descriptions.Item label="Votre nom">{this.state.name}</Descriptions.Item>
                                    <Descriptions.Item label="Votre e-mail">
                                    <a>{this.state.email}</a>
                                    </Descriptions.Item>
                                <Descriptions.Item label="Votre Id">{this.state.id}</Descriptions.Item>
                                <Descriptions.Item label="Votre grâde">{this.state.role}</Descriptions.Item>
                                </Descriptions>
                            </PageHeader>

                            <Modal isOpen={this.state.modalUpdate} fade={false}
                                >
                                <ModalHeader className="mx-auto modal-header">
                                    Editer Mon profil
                                    {this.props.other}
                                </ModalHeader>
                                <ModalBody className="bg-light">
                                    <UpdateMyProfileForm updateUser = {this.updateUserReact } close = {this.modalUpdateFct } userId = {this.state.updateUserId}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.modalUpdateFct}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                    </div>

                    <AdminContent/>


            </div>
            )
            
        }else{
            return(
                <div
                            style={{
                            backgroundColor: '#F5F5F5',
                            padding: 24,
                            }}

                           
                        >
                            <PageHeader
                            ghost={false}
                            title="Page De Profile"
                            extra={[
                                <Button key="1" type="primary" onClick={() => {
                                    this.setState({
                                    modalUpdate : true})}}>
                                  Editer Mon Profil
                                </Button>,
                              ]}
                            
                            >
                                <Descriptions size="small" column={3}>
                                    <Descriptions.Item label="Votre nom">{this.state.name}</Descriptions.Item>
                                    <Descriptions.Item label="Votre e-mail">
                                    <a>{this.state.email}</a>
                                    </Descriptions.Item>
                                <Descriptions.Item label="Votre Id">{this.state.id}</Descriptions.Item>
                                <Descriptions.Item label="Votre grâde">{this.state.role}</Descriptions.Item>
                                </Descriptions>
                            </PageHeader>

                            <Modal isOpen={this.state.modalUpdate} fade={false}
                             >
                                <ModalHeader className="mx-auto modal-header">
                                    Editer Mon Profil
                                    {this.props.other}
                                </ModalHeader>
                                <ModalBody className="bg-light">
                                    <UpdateMyProfileForm updateUser = {this.updateUserReact } close = {this.modalUpdateFct } userId = {this.state.updateUserId}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.modalUpdateFct}>Cancel</Button>
                                </ModalFooter>
                        </Modal>
                </div>
            )
            
        }
    }
    render() {
        return (

            this.affichage(this.state.role)
        );
    }
}

export default Profile