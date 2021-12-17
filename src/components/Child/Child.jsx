import React from 'react'

export default function Child({person, deletePeople, editPeople}) {
    const [edit, setEdit] = useState(false)
const {text, done, id} = person
    
const thisEdit = setState(!edit)
//I want to be able to do a simple turnery. Vonta's code is.... a lot. There is a lot going on and when I tried to follow it last time, I got confused and upset. 
//this time, I took a simple approach and I know there is a clean way to do a simple button switch to toggle the edit and save functionality of this code

    return (
        <div>
          {text}
          <button onClick={()=> deletePeople(id)} > delete </button>

          {/* essentially, I would like it to be "click edit, if it is edit then turn into and input and show save" */}
          <button onClick={()=> editPeople(id)}>{thisEdit ? <input> edit : <input/> save }
          
          </button>

        </div>
    )
}
