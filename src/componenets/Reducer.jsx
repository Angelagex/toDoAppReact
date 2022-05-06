function reducer(state, action){
    switch(action.type){

        case "get-notes":
            const stateWithAllNotes = {
                ...state,
                listOfNotes: action.payload
            }
            return stateWithAllNotes        
        case "add-note":
            const newNote = action.payload
            const newListOfNotesAddNote = [...state.listOfNotes, newNote]

            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddNote
            }
            return newStateAddNote

        case "remove-note":
            const newListOfNotesWithoutPayloadNote = state.listOfNotes.filter( note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = {...state, listOfNotes: newListOfNotesWithoutPayloadNote}
            return newStateWithNoteDeleted

        case "update-note":
            console.log(action.payload);
            const newListOfNotes = state.listOfNotes.filter( note => note.id !== action.payload.id)
            const newListOfNotesModification = [...newListOfNotes, action.payload]
            const newListOfNotesCheckbox = {...state, listOfNotes: newListOfNotesModification}
            return newListOfNotesCheckbox
    }
}

export default reducer