import React from "react";
import { Form, Input, Select, Button,Icon } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
class AddProjectForm extends React.Component {

    state = {
        description : "",
        budget : "",
        createdBy : this.props.currentUser,
        duree : "",
        objectif : ""
    }

  handleDescriptionChange = e => {
    this.setState({
        description : e.target.value
    })
  };

  handleBudgetChange = e => {
    this.setState({
        budget : e.target.value
    })
  };


  handleDureeChange = e => {
    this.setState({
        duree : e.target.value
    })
  };


  handleObjectifChange = e => {
    this.setState({
        objectif : e.target.value
    })
  };

 




  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addProject({
        description : this.state.description,
        duree : this.state.duree,
        budget : this.state.budget,
        objectif : this.state.objectif,
        createdBy : this.state.createdBy,
        });

        console.log("projet" +{
            description : this.state.description,
            duree : this.state.duree,
            budget : this.state.budget,
            objectif : this.state.objectif,
            createdBy : this.state.createdBy,
            } );
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
        <Form layout="inline" onSubmit={this.handleSubmit} className="mt-0 form" >
            <Form.Item>
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "La description du projet"
                        />
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        value={this.state.budget}
                        onChange={this.handleBudgetChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Le budget du projet"
                        />
                    
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        value={this.state.duree}
                        onChange={this.handleDureeChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "La durée du projet"
                        />
                    
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.objectif}
                        onChange={this.handleObjectifChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Objectif du projet"
                        />
                    
            </Form.Item>

            <div className="mx-auto mt-4">
                <Button type="primary" htmlType="submit" className="login-form-button"  style={{marginTop : 25}} >
                    Envoyer
                </Button>
            </div>
        </Form>
        </div>
   
    );
  }
}



export default AddProjectForm ; 