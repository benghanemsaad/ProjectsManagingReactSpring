import { CONSTANTS } from "../actions";


export const addCard = (listID ,title , duration , deadline) => {
     return{
        type : CONSTANTS.ADD_CARD,
        payload : {title , duration ,deadline,listID
        }
    };
};