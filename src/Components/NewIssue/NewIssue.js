import React, {useState} from 'react'
import './newIssue.styled.css'

const NewIssue = ({AddIssue}) => {
    const [title,setTitle] = useState('')
    const handleChange = e => {
        e.preventDefault()
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    const formSubmit  = e =>  {
        e.preventDefault();
        AddIssue(title) 
    }
    return (
        <form className="new-issue" onSubmit={formSubmit}>
                <input type="text" placeholder="todo.." onChange={handleChange} value={title} />
                <button> Submit</button>
        </form>
    )
}

export default NewIssue
