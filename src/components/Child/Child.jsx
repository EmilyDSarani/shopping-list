import React from 'react'

export default function Child({person, onChange, edit, setEdit}) {
const {id, text, done} = person

let editPeople 
if (edit)  { 
    editPeople = (
    <>
    <input 
    value={text}
    onChange={(e)=>{
        onChange({
            ...person, 
            text: e.target.value})
        }} />
    
        
        <button
        type="button"
        onClick={() => setEdit(false)}> Done </button>

    </>
)
    } else {
        editPeople =(
            <>
            <p>{text}</p>
            <button type="button"
            onClick={()=> setEdit(true)}>Edit</button>
            </>
        )

    }


    return (
        <div>
            <input 
            type="checkbox"
            checked= {done}
            onChange={(e)=>{
                onChange({
                    ...person,
                    done: e.target
                })
            }}
            /> {text} 
        </div>
    )
}
