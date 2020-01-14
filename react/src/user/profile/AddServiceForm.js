import React from "react";
import { Form, Input, Select, Button,Icon } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
class AddServiceForm extends React.Component {

    state = {
        name : ""
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
        <Form layout="inline" onSubmit={this.handleSubmit} className="mt-0 form" >
            <Form.Item>
                    <TextArea
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Le nom du service"
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



export default AddServiceForm ; 