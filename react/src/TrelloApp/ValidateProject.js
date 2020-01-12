import { Steps, Button, message, Alert } from 'antd';
import React from 'react';
import ProjectCardInValidation from './ProjectCardInValidation';
import { getProjectById } from "../util/APIUtils";
import { valideProject } from "../util/APIUtils";

import ChartOfVote from './ChartOfVote';

import FinalContent from './FinalContent';


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

nbrFavorable = 0 ;
nbrDiFavorable = 0 ; 
  


  loadProjectInformations = () =>  {
    getProjectById(this.props.projectId)
        .then(response =>{
                this.setState({
                    currentProject : response,
                });
                this.countValidation();
                this.setState({ steps  : 
                  [
                  {
                    title: 'Toutes les informations sur le projet',
                    content: <ProjectCardInValidation emps={this.state.currentProject} createdBy = {this.state.currentProject.createdBy} description = {this.state.currentProject.description} id = {this.state.currentProject.id} budget= {this.state.currentProject.budget} duree= {this.state.currentProject.duree} />,
                  },
                  {
                    title: 'Statistiques',
                    content: <ChartOfVote fav={this.nbrFavorable} difav = {this.nbrDiFavorable}/>,
                  },
                  {
                    title: 'Confirmation',
                    content: <FinalContent fav={this.nbrFavorable} difav = {this.nbrDiFavorable}/>,
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
      }

      countValidation =  () => {
        this.state.currentProject.validations.map(
          validation => {
            if(validation.validation){
              this.nbrFavorable++ ;
            }else{
              this.nbrDiFavorable++;
            }
          }
       
      )
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
            <Button type="primary" onClick={() => {
              message.success('Processing complete!');
              valideProject(this.state.currentProject.id).then(response =>{
                console.log("Return from validate Project + " + response);
                if(response === "OK"){
                  Alert.success("Projet Validée");
                }else{
                  Alert.error("Les Collaborateurs ont voté de ne pas valider le projet");
                }
        }  
        ).catch(error => {
            //Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        })

            } }>
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