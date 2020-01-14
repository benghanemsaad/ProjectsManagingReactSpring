import React from "react";
import { Form, Input, Select, Button,Icon } from 'antd';
import { getUserById } from "../../util/APIUtils";
import Alert from 'react-s-alert';

const { TextArea } = Input;
const { Option } = Select;
class UpdateUserForm extends React.Component {

    state = {
        id : "" ,
        name : "",
        email : "",
        role : "",
        password : ""
    }

    componentDidMount() {
        getUserById(this.props.userId)
        .then(response => {
            console.log("this our response " + response);
        this.setState({
            name: response.name,
            id : response.id,
            email : response.email,
            password : ""

        });
        console.log("this our users" + this.state.users);

        }).catch(error => {
        
        }); 
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
      if(this.state.password===""){
        e.preventDefault();
          this.props.close();
          Alert.error("Password vide!");
      }else{
        e.preventDefault();
        this.props.updateUser({
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
        },this.state.id);
      this.props.close();
      }
      
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
                        placeholder = "New Password"
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



export default UpdateUserForm ; 