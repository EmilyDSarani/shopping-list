import React from 'react'
import { useReducer, useState } from 'react'
import AddChild from '../../components/AddChild/AddChild'
import ChildrenList from '../../components/ChildrenList/ChildrenList'

//setting an initial state for the reducer to grab
const initialPeople =[
    {id: 0, text: 'Cindy Lou Who', done: false},
    {id: 1, text:'Rudolph', done: false},
    {id: 2, text:'Frosty', done: false}
]

//creating the logic for the reducer
//THIS NEEDS TO MATCH DISPATCH NAMING
function personReducer(people, action){
    switch(action.type){
        case 'add':{
            return [ ...people, {
                //math.random for the id here
                id: Math.floor(Math.random() * 1000),
                text: action.text,

            }]
        }
        //this will need to edit the individual
        //maping is through might be the way to go
        case 'edit': {
            //edit logic broke my heart, restarting this from scratch
            return people.map((person) => {
                if (person.id === action.person.id){
                    return action.person
                }
                return person
            })

        }
        //the filter will be our delete handler. If it filters through and the people.id does not match the action.id, it will delete it? !== is bang equal so I assume that means delete person by id. 
        case 'delete':{
           return people.filter((people)=> people.id !== action.id) 
        }
        //the default is a way of stopping the code when there is nothing left to do?
        default: {
            throw Error('HO HO HO GOTTA TURN THAT SLEIGH AROUND')
        }
    }
  
}

export default function List() {
    //setting up the reducer
    const [text, setText] = useState('')
    // const [edit, setEdit] = useState(false)
    const [people, dispatch] = useReducer(personReducer, initialPeople)


//this handle is a way that Karl showed me that he did for his code and it maked since. 
//this adds the character and the DISPATCH HAS TO MATCH THE CASE
    const handleAdd = (e) =>{
    e.preventDefault()
    dispatch({
        type:'add',
        text:text
    })
    }
//this has to match the naming convention from the CASE
    const handleEdit= (id) =>{
        dispatch({
            type:'edit',
            id
        })
        }
//this has to have the id in it because we dont want to delete the whole damn page, just the one thing. 
    const handleDelete = (id) =>{
        dispatch({
            type:'delete',
            id
        })
        }

//do the add logic here, maybe, gameday decision
    return (
        <div>
            <AddChild 
            onAddChild={handleAdd}
            text={text}
            setText={setText} />
            <ChildrenList editPeople={handleEdit} deletePeople={handleDelete} people={people}/>
        </div>
    )
}
