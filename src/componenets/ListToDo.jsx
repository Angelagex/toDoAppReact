import React, { useContext } from 'react'
import { Store } from './StoreProvider'

const ListToDo = () => {

    const {state, dispatch} = useContext(Store)

  return (
   <>
    <h1>Actions pending to be done</h1>
    <div>
      {state.listOfNotes.map ( note => (
        <li  style={note.done ? {textDecoration: 'line-through'} : {}} key= {note.id}> 
          {note.title} <br />
          {note.message} <br />
        </li>
      ))}
    </div>
   </>
  )
}

export default ListToDo