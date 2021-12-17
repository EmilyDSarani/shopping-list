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
            <form onSubmit={(e) => onAddChild(e)}>
                <input 
                placeholder="Sort List"
                value={text}
                onChange={(e) => setText(e.target.value)} />

                <button
                type="submit">
                    NiceList
                </button>
                {/* <button
                type="submit">
                    NaughtyList
                </button> */}

            </form>
        </div>
    )
}
