import React from 'react'
import { useReducer, useState } from 'react'
import AddChild from '../../components/AddChild/AddChild'
import ChildrenList from '../../components/ChildrenList/ChildrenList'

//setting an initial state for the reducer to grab
const initialPeople =[
    {id:0, text: 'Cindy Lou Who', done: false},
    {id:1, text:'Rudolph', done: false},
    {id:2, text:'Frosty', done: false}
]

//creating the logic for the reducer
function personReducer(people, action){
    switch(action.type){
        case 'add':{
            return [ ...people, {
                //math.random for the id here
                id: Math.floor(Math.random() * 1000),
                text: action.text,
                done: false

            }]
        }
        case 'change': {
            return people.map((peep)=>{
                if (peep.id === action.peep.id){
                    return action.peep
                }
                return peep
            })
        }
    }
  
}

export default function NiceList() {
    //setting up the reducer
    const [text, setText] = useState('')
    const [edit, setEdit] = useState(false)
    const [people, dispatch] = useReducer(personReducer, initialPeople)



    const handleAdd = (e) =>{
    e.preventDefault()
    dispatch({
        type:'add',
        text:text
    })
    }

    const handleChange = (e) =>{
        e.preventDefault()
        dispatch({
            type:'change',
            people:people
        })
        }

//do the add logic here, maybe, gameday decision
    return (
        <div>
            <AddChild 
            onAddChild={handleAdd}
            text={text}
            setText={setText} />
            <ChildrenList edit={edit} setEdit={setEdit} people={people} onChangeChild={handleChange}/>
        </div>
    )
}
