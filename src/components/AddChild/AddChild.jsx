import React from 'react'
import { useState } from 'react'

//in the map, bring the state through and let the person go through the state
//THEN map through it as naughty or nice to render in the list
//OR--2 maps, look through all the nice and go here type of thing
export default function AddChild({ onAddChild, setText, text }) {
    //my form for input and button

    //set the state that is being passed down

    
    return (
        <div>
            <form onSubmit={onAddChild}>
                <input aria-label='add-input' value={text} onChange={(e)=> setText(e.target.value)} />
                <button  aria-label='add-item'>Add Child</button>

            </form>
           
        </div>
    )
}
