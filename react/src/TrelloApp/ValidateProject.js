import { Steps, Button, message } from 'antd';
import React from 'react';
import ProjectCardInValidation from './ProjectCardInValidation';
import { getProjectById } from "../util/APIUtils";


const { Step } = Steps;



class ValidateProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      currentProject : null,
      steps  : [
        {
          title : "hii",
          content : "bye"
        }
      ]
  }
}
  


  loadProjectInformations = () =>  {
    getProjectById(this.props.projectId)
        .then(response =>{
                console.log("our response "  + response);
                this.setState({
                    currentProject : response,
                });
                this.setState({ steps  : 
                  [
                  {
                    title: 'Toutes les informations sur le projet',
                    content: <ProjectCardInValidation emps={this.state.currentProject} createdBy = {this.state.currentProject.createdBy} description = {this.state.currentProject.description} id = {this.state.currentProject.id} budget= {this.state.currentProject.budget} duree= {this.state.currentProject.duree} />,
                  },
                  {
                    title: 'Second',
                    content: 'Second-content',
                  },
                  {
                    title: 'Last',
                    content: 'Last-content',
                  },
                ]
              });
        }  
        ).catch(error => {
            //Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        })

  }

      componentDidMount(){
        this.loadProjectInformations();
        
        /**/
      
  }

  updateProjectInsideCard = () => {
    
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
        <div style = {{ margin : 40 }}>
        <h3 style={{textAlign : "center"}}>Cloturer le projet</h3>
      <div style = {{ margin : 40 }}>
        <Steps current={current}>
          {this.state.steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{this.state.steps[current].content}</div>
        <div className="steps-action">
          {current < this.state.steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === this.state.steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default ValidateProject ; 