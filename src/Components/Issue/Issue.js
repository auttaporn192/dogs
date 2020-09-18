import React from 'react'
import './issue.styled.css'

const Issue = ({title , status}) => {
    return (
        <div className="issue">
            <input type="radio" value={status} />
            <label>{title}</label>
        </div>
    )
}

export default Issue
