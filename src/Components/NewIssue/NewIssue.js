import React from 'react'

const NewIssue = ({AddIssue}) => {
    const handleClick  = e =>  {
        e.preventDefault();
        AddIssue("PIK") 
    }
    return (
        <div>
                <input type="text" placeholder="todo.." />
                <button onClick = {handleClick}> Submit</button>
        </div>
    )
}

export default NewIssue
