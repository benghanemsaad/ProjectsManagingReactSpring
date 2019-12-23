import React , { Component } from "react";
import TrelloList from "../components/TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "../components/TrelloActionButton";
import { getAllListTask } from '../util/APIUtils';





class App extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        initialState : []
    }

    loadListAfterAdd = response => {
        this.setState ({
            initialState : response
        });
    }

    loadList = () => {
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
     componentDidMount(){
        this.loadList();
     }

     componentDidUpdate(){
        this.loadList();
     }

    render(){
        const { lists , authenticated , currentUser } = this.props;
        return(
            <div className="App">
                <h2>Your Project Mr : <span>{this.props.currentUser.name}</span></h2>
                <div style={styles.listsContainer}>
                    { this.state.initialState.map(list => 
                    <TrelloList listID = {list.id} key={list.id} title = { list.title } cards = { list.cards }  onLoad  = {this.loadListAfterAdd} />
                    )}
                    <TrelloActionButton list />
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
 