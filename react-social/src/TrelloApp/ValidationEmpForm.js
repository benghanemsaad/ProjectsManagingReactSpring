import React from "react";
import { Form, Input, Select, Button,Icon } from 'antd';

const { TextArea } = Input;


const { Option } = Select;

class ValidationEmpForm extends React.Component {

    state = {
        comment : "",
        validation : ""
    }

  handleNumberChange = e => {
    
   
    this.setState({
        comment : e.target.value
    })
  };

  handleCurrencyChange = currency => {
    this.setState({
        validation : currency 
    })
  };


  handleSubmit = (e) => {
      if(this.state.validation ==="Valider"){
      
      e.preventDefault();
      this.props.validation({
        comment : this.state.comment,
        validation : true
  });
      this.props.close();
    
      }else {
        console.log("Validation Form ") ; 
        e.preventDefault();
         this.props.validation({
        comment : this.state.comment,
        validation : false
    });
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
                        value={this.state.comment}
                        onChange={this.handleNumberChange}
                        style={{ width: '30', marginRight: '3%' }}
                        placeholder = "Ton Commentaire"
                        />
                    <Select
                        value={this.state.validation}   
                        style={{ width: '30' }}
                        onChange={this.handleCurrencyChange}
                    >
                        <Option value="Valider">Valider</Option>
                        <Option value="Invalider">Invalider</Option>
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



export default ValidationEmpForm ; 