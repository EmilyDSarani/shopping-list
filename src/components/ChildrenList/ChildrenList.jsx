import { isTemplateElement } from '@babel/types'
import React from 'react'

export default function ChildrenList({person}) {
    return (
        <div>
            <input 
            typ="checkbox"
            checked={person.done}
            /> {person}

        </div>
    )
}
