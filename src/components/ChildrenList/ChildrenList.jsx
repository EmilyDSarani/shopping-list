import React from 'react'
import Child from '../Child/Child'

export default function ChildrenList({ people, onChangeChild, edit, setEdit}) {
    
    return (
        <div>
        <ul>
            {people.map((person)=>(
                <li key={person.id}>
                    <Child person={person} onChange={onChangeChild} edit={edit} setEdit={setEdit}/>
                 </li>   
            ))}
        </ul>

        </div>
    )
}
