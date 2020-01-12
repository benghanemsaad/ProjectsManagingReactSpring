import { CONSTANTS } from "../actions"
import { getAllListTask } from '../util/APIUtils';

let listID = 2 ;
let cardID = 4 ; 
//List Of lists and each of list has a array of cards


getAllListTask()
    .then(response => {
        doSometing(response)
    }).catch(error => {
      console.log(error);
    });    

let initialState=[];
 
function doSometing (response) {
    initialState = response ; 
}
  /*
const initialState = [
    {
        title : "Last Episode",
        id : 0,//add others 
        cards : [
            {
                id : 0 ,
                text : "Task 1",
                deadlineDateAndhour: "2017-05-24T10:30",
                duration : "14 H",
                createdBy : "Admin",
                state :"Etat",
                comment :"Urgent"
            },
            {
                id : 1 ,
                text : "task 2",
                deadlineDateAndhour: "2017-05-24T11:00",
                duration : "14 H",
                createdBy : "Admin",
                state :"Etat",
                comment :"Info"
            }
        ]
    },

    {
        title : "First Episode",
        id : 1,//add others 
        cards : [
            {
                id : 0 ,
                text : "Task 1",
                deadlineDateAndhour: "2017-05-24T10:30",
                duration : "14 H",
                createdBy : "Admin",
                state :"Etat",
                comment :"Urgent"
            },
            {
                id : 1 ,
                text : "task 2",
                deadlineDateAndhour: "2017-05-24T11:00",
                duration : "14 H",
                createdBy : "Admin",
                state :"Etat",
                comment :"Info"
            },
            {
                id : 2 ,
                text : "task 2",
                deadlineDateAndhour: "2017-05-24T11:30",
                duration : "14 H",
                createdBy : "Admin",
                state :"Etat",
                comment :"Info"
            }
        ]
    }
]*/

//Get the latest list task id and intilize listID and Generate the new ID 
const listsReducer = (state = initialState , action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST : 
            const newList = {
                title : action.payload,
                cards : [],
                id : listID
            }
            listID += 1 ;
            return [...state , newList];
        case CONSTANTS.ADD_CARD :
            const newCard = {
                id : cardID ,
                text : action.payload.title,
                deadlineDateAndhour: action.payload.deadline,
                duration : action.payload.duration,
                createdBy : "Admin",
                state :"Etat",
                comment :"Info" 
            }
            cardID += 1 ;
            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                     return {
                         ...list,
                         cards : [...list.cards,newCard]
                     }
                }else {
                    return list;
                }
            });
            return newState ; 
        default : 
            return state ;
    }
}

export default listsReducer ;