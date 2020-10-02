import React , {useState} from 'react'
import Issue from '../Issue/Issue'
 import NewIssue from '../NewIssue/NewIssue'
 import "./history.styled.css"
const HistoryList = () => {
     
      const listHistory = [
         { id:1,title: "take a baht", status: true },
            { id:2,title: "watch market shared", status: false },
            { id:3,title: "take a examine.", status: true }
    ]
    const [lists , setLists] = useState(listHistory)
  
   

    const AddIssue = (title) => {
        const newList = [...lists]
        newList.push({ id:4 ,title, status: true })
        setLists(newList) 
    }
    return (
        <div className="history-list">
            {lists.map(ls => (<Issue key={ls.id} title={ls.title} status={ls.status}></Issue>))}
            <NewIssue AddIssue={AddIssue} />
        </div>
    )
}

export default HistoryList
