import React from 'react'
import Child from '../Child/Child'

export default function ChildrenList({ people, deletePeople, editPeople }) {
    
    return (
        <div>
      <ul>
          {people.map((person) => (
              <li key={person.id}>
                  <Child person={person} deletePeople={deletePeople} editPeople={editPeople} />
              </li>    

          ))}
      </ul>

        </div>
    )
}
