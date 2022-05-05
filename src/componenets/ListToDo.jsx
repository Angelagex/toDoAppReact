import React, { useContext } from 'react'
import { Store } from './StoreProvider'

const ListToDo = () => {

    const {state, dispatch} = useContext(Store)

    const onCheckbox = ( e, note ) => {
      const checked = e.currentTarget.checked
      dispatch({
        type: "update-note",
        payload: {...note, done: checked
        }
      })
    }


    const onDelete = (note) => {
      dispatch({
        type: "remove-note",
        payload: note
      })
    }

  return (
   <>
    <h1>Actions pending to be done</h1>
    <div>
      {state.listOfNotes.map ( note => (
        <li  style={note.done ? {textDecoration: 'line-through'} : {}} key= {note.id}> 
          {note.title} <br />
          {note.message} <br />
          <input type="checkbox" checked={note.done} onChange={(e) => {onCheckbox(e, note)}} />
          <button onClick={(e) => onDelete(note)}>Delete</button>
        </li>
      ))}
    </div>
   </>
  )
}

export default ListToDo