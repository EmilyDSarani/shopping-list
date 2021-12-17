import React from 'react'

export default function Child({person}) {
const {id, text, done} = person


    return (
        <div>
            <input 
            type="checkbox"
            checked= {done}
            // onChange={(e)=>{
            //     onChange({
            //         ...person,
            //         done: e.target.value 
            //     })
            // }}
            /> {text} 
        </div>
    )
}
