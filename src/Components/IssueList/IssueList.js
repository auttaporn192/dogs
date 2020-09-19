import React, { Component } from 'react'
import NewIssue from '../NewIssue/NewIssue'
import List from '../Issue/Issue'
import './issueList.styled.css'

export class IssueList extends Component {
constructor(props) {
    super(props);
    this.state ={
        todos : [
            { id:1,title: "make a report", status: false },
            { id:2,title: "weekly meeting", status: false },
            { id:3,title: "test and deploy", status: false }
        ]
    }
}
    render() {

        const AddIssue = (title) => {
        const issueList = this.state.todos
        const newIssue = {id:4, title,status:false}
        issueList.push(newIssue)
         console.log(this.state.todos)    
         this.setState({todos:issueList})
    }
        return (
            <>
            <div className="issue-list">
                {
                    this.state.todos.map(todo => (<List key={todo.id} title={todo.title} status={todo.status} />))
                }
            </div>
            <NewIssue AddIssue={AddIssue} />
            </>
        )
    }
}

export default IssueList
