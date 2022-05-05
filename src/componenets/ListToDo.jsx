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

  return (
   <>
    <h1>Actions pending to be done</h1>
    <div>
      {state.listOfNotes.map ( note => (
        <li  style={note.done ? {textDecoration: 'line-through'} : {}} key= {note.id}> 
          {note.title} <br />
          {note.message} <br />
          <input type="checkbox" checked={note.done} onChange={(e) => {onCheckbox(e, note)}} />
        </li>
      ))}
    </div>
   </>
  )
}

export default ListToDo