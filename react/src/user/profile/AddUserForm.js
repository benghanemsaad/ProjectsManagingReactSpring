import React from "react";
import { Form, Input, Select, Button,Icon } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
class AddUserForm extends React.Component {

    state = {
        name : "",
        email : "",
        role : "",
        password : ""
    }

  handleNameChange = e => {
    
   
    this.setState({
        name : e.target.value
    })
  };

  handleEmailChange = e => {
    this.setState({
        email : e.target.value
    })
  };

  handlePasswordChange = e => {
    this.setState({
        password : e.target.value
    })
  };

  handleCurrencyChange = currency => {
    this.setState({
        role : currency 
    })
  };


  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addUser({
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
        role : this.state.role
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
        <Form layout="inline" onSubmit={this.handleSubmit} className="mt-0 form" >
            <Form.Item>
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Le nom complet"
                        />

                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Email"
                        />

                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Password"
                        />


                    
                    <Select
                        value={this.state.role}   
                        style={{ width: '30' }}
                        onChange={this.handleCurrencyChange}
                    >
                        <Option value="Chef">Chef</Option>
                        <Option value="Simple">Simple</Option>
                        <Option value="Admin">Admin</Option>
                    </Select>
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



export default AddUserForm ; 