import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";


const ListContainer = styled.div`
    background-color : #dfe3e6;
    border-radius : 3px;
    width : 300px;
    padding: 8px;
    margin-right : 8px;
    height : 100% ;
`;



const TrelloList = ({title,cards,listID,email, laFonction2}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
                <h4>{title}</h4>
                {cards.map((card,index) => (
                <TrelloCard  index={index} id={card.id} key={card.id } text ={card.text} deadlineDateAndhour ={card.deadLineDateAndhour} createdBy = {card.createdBy} duration = {card.duration} comment = {card.comment}  />
                ))}
                <TrelloActionButton listID = {listID} email = {email} laFonction2 = { laFonction2 } />
                {provided.placeholder}
                </ListContainer>    
            )}
                
        </Droppable>
    );
};





export default TrelloList ; 