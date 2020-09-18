import React, { Component } from 'react'
import List from '../Issue/Issue'
import './issueList.styled.css'

export class IssueList extends Component {
    state ={
        todos : [
            { id:1,title: "make a report", status: false },
            { id:2,title: "weekly meeting", status: false },
            { id:3,title: "test and deploy", status: false }
        ]
    }
    render() {
        return (
            <div className="issue-list">
                {
                    this.state.todos.map(todo => (<List key={todo.id} title={todo.title} status={todo.status} />))
                }
            </div>
        )
    }
}

export default IssueList
