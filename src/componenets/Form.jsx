import React, { useContext, useState, useRef } from 'react'
import { Store } from './StoreProvider'

const Form = () => {

    const formRef = useRef(null)
  
    const {state, dispatch} = useContext(Store)


    const onAdd = async (e) => {
        e.preventDefault()

        if(title && message){
            const noteFromForm = {
                title,
                message,
                done: false
            }
            let notSavedPromise = await fetch("http://localhost:8081/api/save/note",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(noteFromForm)
            })

            let notSaved = await notSavedPromise.json()

            dispatch({
                type: "add-note",
                payload: notSaved
            })
            formRef.current.reset()
        }
    }
  
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const addTitle = (e) => {
        setTitle(e.target.value)
    }

    const addMessage = (e) => {
        setMessage(e.target.value)
    }


 return (
    <form ref={formRef}>
        <label>Title</label>
        <input type="text" name='title' onChange={addTitle}/>
        <label>Message</label>
        <input type="text"  name='message' onChange={addMessage}/>
        <button type="submit" onClick={onAdd}>Add Note</button>
    </form>
  )
}

export default Form