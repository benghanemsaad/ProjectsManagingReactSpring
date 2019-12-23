import React , { Component } from "react";
import TrelloList from "../components/TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "../components/TrelloActionButton";
import { getAllListTask } from '../util/APIUtils';
import { addTaskflow } from '../util/APIUtils';
import { addTaskToFlow } from "../util/APIUtils";
import Alert from 'react-s-alert';


class App extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        initialState : []
    }


    loadList = () => {
        //alert("je suis la!");
        getAllListTask()
            .then(response => {
            this.setState({
                initialState: response,
            });
            }).catch(error => {
            this.setState({
                loading: false
            });  
            }); 
    }

    updtateApp = (req) => {
        console.log("je suis la");
        this.loadList();
        console.log("after");
        console.log(this.state.initialState);
    }

    addTaskflowInReact = (flow) => {
        addTaskflow(flow)
        .then(response => {
            //console.log("bloque ajoute");
            //console.log(response);
            Alert.success("BLOQUE DE TACHE AJOUTE");
            this.setState({
                initialState : response//[...this.state.initialState , response]
            });
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }


    addTaskToFlowInReact = (task , listID) =>{
        addTaskToFlow(task , listID)
        .then(response => {
            Alert.success("TACHE AJOUTEE");
            this.loadList();
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
        
    }


    componentDidMount(){
        this.loadList();
    }


    render(){
        const { lists , authenticated , currentUser } = this.props;
        return(
            <div className="App">
                <h2>Your Project Mr : <span>{this.props.currentUser.name}</span></h2>
                <div style={styles.listsContainer}>
                    { this.state.initialState.map(list => 
                    <TrelloList listID = {list.id} key={list.id} title = { list.title } cards = { list.cards }  loadList={this.loadList} email = {this.props.currentUser.email} laFonction2 = {this.addTaskToFlowInReact}/>
                    )}
                    <TrelloActionButton list laFonction={this.addTaskflowInReact} />
                </div>
            </div>
        );
    }
}

const styles = {
    listsContainer : {
        display : "flex",
        flexDirection : "row"
    }
}

const mapStateToProps = state => ({
    lists : state.lists
})

export default connect(mapStateToProps)(App);
 