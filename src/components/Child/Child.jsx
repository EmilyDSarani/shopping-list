import React from 'react'
import { useState } from 'react'

export default function Child({person, deletePeople, editPeople, setText}) {
    const [edit, setEdit] = useState(false)
const {text, done, id} = person
    
let peopleContent
if(edit) {
    peopleContent = (
        <div>
            <input
            aria-label='edit-input'
            value={text}
            onChange={(e)=>{
                editPeople({
                    ...person,
                    text: e.target.value
                })
            }} />
            <button 
            aria-label='save-item'
            type='button'
            onClick={()=> setEdit(false)}
            >Send to Elves</button>
        </div>
    )
} else {
    peopleContent = (
        <div>
            <p>{text}</p>
            <button
            aria-label='edit-item'
             type='button'
            onClick={()=> {
                setEdit(true)
                setText(text)
            }
            }
            >Check it Twice</button>
        </div>
    )
}


    return (
        <div>
         {peopleContent}


          <button aria-label='delete-item' onClick={()=> deletePeople(id)} > delete </button>

        </div>
    )
}
