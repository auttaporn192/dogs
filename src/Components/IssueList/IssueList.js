import React, { Component } from 'react'
import NewIssue from '../NewIssue/NewIssue'
import List from '../Issue/Issue'
import './issueList.styled.css'

export class IssueList extends Component {
constructor(props) {
    super(props);
    this.state ={
        todos : [
            { id:1,title: "make a report", status: true },
            { id:2,title: "weekly meeting", status: true },
            { id:3,title: "test and deploy", status: true }
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

        const UpdateIssue = (id,title) =>{
            const issueList = [...this.state.todos]
            issueList.forEach(cp => {
                console.log(id)
                if (cp.id === id){
                    cp.title= title
                }
            })

            this.setState({todos:issueList})
        }

    const deleteIssue = (id) => {
        console.log("test")
        let issueList = [...this.state.todos]
        issueList = issueList.filter(issue => issue.id !== id || issue.status === true)
        issueList.forEach(cp => {
            if(cp.id === id){
                cp.status = false
            }
        })
        this.setState({todos:issueList})
    }   

    const eliminate = (id) => {

    }

        return (
            <>
            <div className="issue-list">
                {
                    this.state.todos.map(todo => (<List key={todo.id} title={todo.title} status={todo.status}
                    save={UpdateIssue} todoid={todo.id} erase={deleteIssue} />))
                }
            
            <NewIssue AddIssue={AddIssue} />
            </div>
            </>
        )
    }
}

export default IssueList
