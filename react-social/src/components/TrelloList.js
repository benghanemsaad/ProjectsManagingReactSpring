import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";



const TrelloList = ({title,cards,listID,email, laFonction2}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                <h4>{title}</h4>
                {cards.map((card,index) => (
                <TrelloCard  index={index} id={card.id} key={card.id } text ={card.text} deadlineDateAndhour ={card.deadLineDateAndhour} createdBy = {card.createdBy} duration = {card.duration} comment = {card.comment}  />
                ))}
                <TrelloActionButton listID = {listID} email = {email} laFonction2 = { laFonction2 } />
                {provided.placeholder}
                </div>    
            )}
                
        </Droppable>
    );
};

const styles = {
    container:{
        backgroundColor : "#dfe3e6",
        borderRadius : 3,
        width : 300,
        padding: 8,
        marginRight : 8,
        height : "100%"
    }
}



export default TrelloList ; 