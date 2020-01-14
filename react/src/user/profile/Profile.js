import React, { Component } from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import './Profile.css';
import AdminContent from './AdminContent';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                                <Button key="1" type="primary">
                                  Editer Mon Profil
                                </Button>,
                              ]}
                            
                            >
                                <Descriptions size="small" column={3}>
                                    <Descriptions.Item label="Votre nom">{this.props.currentUser.name}</Descriptions.Item>
                                    <Descriptions.Item label="Votre e-mail">
                                    <a>{this.props.currentUser.email}</a>
                                    </Descriptions.Item>
                                <Descriptions.Item label="Votre Id">{this.props.currentUser.id}</Descriptions.Item>
                                <Descriptions.Item label="Votre grâde">{this.props.currentUser.role}</Descriptions.Item>
                                </Descriptions>
                            </PageHeader>
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

                            extra={[
                                <Button key="1" type="primary">
                                  Editer Mon Profil
                                </Button>,
                              ]}
                        >
                            <PageHeader
                            ghost={false}
                            title="Page Dashbord"
                            
                            >
                                <Descriptions size="small" column={3}>
                                    <Descriptions.Item label="Votre nom">{this.props.currentUser.name}</Descriptions.Item>
                                    <Descriptions.Item label="Votre e-mail">
                                    <a>{this.props.currentUser.email}</a>
                                    </Descriptions.Item>
                                <Descriptions.Item label="Votre Id">{this.props.currentUser.id}</Descriptions.Item>
                                <Descriptions.Item label="Votre grâde">{this.props.currentUser.role}</Descriptions.Item>
                                </Descriptions>
                            </PageHeader>
                </div>
            )
            
        }
    }
    render() {
        return (

            this.affichage(this.props.currentUser.role)
        );
    }
}

export default Profile