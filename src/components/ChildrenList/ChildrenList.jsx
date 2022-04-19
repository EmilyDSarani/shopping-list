import React from 'react'
import Child from '../Child/Child'

export default function ChildrenList({ people, deletePeople, editPeople, setText }) {
    
    return (
        <div>
      <ul>
          {people.map((person) => (
              <li key={person.id}>

                  <Child person={person} deletePeople={deletePeople} editPeople={editPeople}
                  setText={setText} />
              </li>    

          ))}
      </ul>

        </div>
    )
}
