import React from "react";
import TrelloCard from "./TrelloCard";


const TrelloList = ({title , cards}) => {
    return (
        <div style={styles.container}>
        <h4>{title}</h4>
        { cards.map(card => <TrelloCard  key={card.id } text ={card.text} deadlineDateAndhour ={card.deadlineDateAndhour} createdBy = {card.createdBy} duration = {card.duration}/>)}
        </div>        

    );
};

const styles = {
    container:{
        backgroundColor : "#dfe3e6",
        borderRadius : 3,
        width : 300,
        padding: 8,
        marginRight : 8
    }
}



export default TrelloList ; 