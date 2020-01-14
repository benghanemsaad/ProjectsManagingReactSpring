import React, { Component } from 'react';
import { Tabs, Radio } from 'antd';
import UserList from './UserList';
import ServiceList from './ServiceList';
import AllProjectAdmin from './AllProjectAdmin';

const { TabPane } = Tabs;

class AdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  render() {
    
    return (
      <div>
        
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Les Utilisateurs" key="1">
                <UserList/>
            </TabPane>
            <TabPane tab="Statistiques Sur Les Projets" key="2">
                <AllProjectAdmin/>
            </TabPane>
            <TabPane tab="Les Services" key="3">
            <ServiceList />
            </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default AdminContent ;