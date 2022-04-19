import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import List from './views/List/List'
import userEvent from '@testing-library/user-event'

beforeEach(()=>{
    render(<List />)
})

it('should add a new input with the button', () => {
//the getByLabel is getting the aria-label that we set for the input and for the button
//the /add-input/i needs to have that 'i' means case-insensitive
    const addInput = screen.getByLabelText(/add-input/i)
   const addButton = screen.getByLabelText(/add-item/i)
  //type will take in 2 params. the first is the element, and the second is whatever you want in that element. 
  //now that I have some text to grab for interaction, then my addButton will render that name  
   userEvent.type(addInput, 'Mary Lou Who Sue')
   
   userEvent.click(addButton)

    //this helps see what is being rendered to our virtual screen
   //screen.debug()

   //so now we are looking for whatever that 2nd element is
   screen.getByText('Mary Lou Who Sue')
})

it('should edit a new input with the button', () => {
    //when doing queryByText, you have to be explicit when checking to see in the document (there is also a toBeNull method to check that it return nothing later on)
    const cindy = screen.queryByText('Cindy Lou Who')
    expect(cindy).toBeInTheDocument()
    const editButton = screen.getByLabelText(/edit-item/i)

    userEvent.click(editButton)

    const inputField = screen.getByLabelText(/edit-input/i)
    const saveEdit = screen.getByLabelText(/save-item/i)

    //Dylan reccommended this, not sure what fireEvent is yet
    fireEvent.change(inputField, {target: {value: 'Sendy Loo Hoo'}})
    //Michael said I couldve done the clear to work
    //userEvent.clear(<element>)

    //just using this, was rendering it at Cindy Lou WhoSendy Loo Hoo
    // userEvent.type(inputField, 'Sendy Loo Hoo')
    userEvent.click(saveEdit)
    

    screen.getByText('Sendy Loo Hoo')

})

it('should delete an input with the button', () => {
    const cindy = screen.queryByText('Cindy Lou Who')
    expect(cindy).toBeInTheDocument()
        
       const deleteButton = screen.getByLabelText(/delete-item/i)
       
       
       userEvent.click(deleteButton)
    
       expect(screen.queryByText('Cindy Lou Who')).toBeNull()
    })
