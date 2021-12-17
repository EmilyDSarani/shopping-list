import React from 'react'
import { useState } from 'react'

export default function Child({person, deletePeople, editPeople}) {
    const [edit, setEdit] = useState(false)
const {text, done, id} = person
    
let peopleContent
if(edit) {
    peopleContent = (
        <div>
            <input
            placeholder={text}
            editPeople={(e)=>{
                onChange({
                    ...person,
                    text: e.target.value
                })
            }} />
            <button 
            type='button'
            onClick={()=> setEdit(false)}
            >Send to Elves</button>
        </div>
    )
} else {
    peopleContent = (
        <div>
            <p>{text}</p>
            <button type='button'
            onClick={()=> setEdit(true)}
            >Check it Twice</button>
        </div>
    )
}


    return (
        <div>
          {text}
          <button 
          type="checkbox"
          checked={done}
          editPeople={(e)=>{
              onChange({
                  ...person,
                  done:e.target.value
              })
          }}
          > edit </button>
          <button onClick={()=> deletePeople(id)} > delete </button>

        </div>
    )
}
