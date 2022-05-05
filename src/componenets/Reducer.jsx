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

        case "remove-note":
            return state

        case "update-note":
            console.log(action.payload);
            const newListOfNotes = state.listOfNotes.filter( note => note.id !== action.payload.id)
            const newListOfNotesModification = [...newListOfNotes, action.payload]
            const newListOfNotesCheckbox = {...state, listOfNotes: newListOfNotesModification}
            return newListOfNotesCheckbox
    }
}

export default reducer