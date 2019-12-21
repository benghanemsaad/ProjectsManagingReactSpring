
//List Of lists and each of list has a array of cards
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
]

const listsReducer = (state = initialState , action) => {
    switch (action.type) {
        default : 
            return state ;
    }
}

export default listsReducer ;