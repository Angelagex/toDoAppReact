function reducer(state, action){
    switch(action.type){
        case "add-note":
            const newNote = {
                id: Math.floor(Math.random() * 100),
                message: action.payload.message,
                title: action.payload.title,
                done: false
            }

            const newListOfNotesAddNote = [...state.listOfNotes, newNote]

            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddNote
            }
            return newStateAddNote

        case "remove-state":
            return state
        case "update-state":
            return state
    }
}

export default reducer