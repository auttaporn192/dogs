import React, {useState} from 'react'
import './issue.styled.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Issue = ({title , status , save , todoid , erase}) => {
    const [edit,setEdit] = useState(false)
    const [text,setText] = useState('')
    const [remove,setRemove] = useState(false)
   
    const editHandle = edtStatue => {
        setEdit(edtStatue)
    }

    const textHandle = e => {
        setText(e.target.value)
    }
    const saveHandle = todoid => {
         setEdit(false);
        save(todoid,text)
       
    }

    const deleteHandle = todoid => {
        if(!status) 
        setRemove(true)
        setTimeout(()=> {erase(todoid)},500)
        
    }

    return (
        <>
        <div className="wrapper">
        <div className={`issue  ${remove && "issue-remove"}`}>
        <div className= {`issue-container  ${edit && "issue-container-edit"} `}>
            
          <div className={`issue-view `} >  
            <div className={`title2 ${!status && "delete-issue"}`}>
                {/*<input type="radio" value={status} /> */}
                <span>{title}</span>
            </div>
            <div className="con-update">
             <span><FontAwesomeIcon icon="pen" onClick={() => editHandle(true)}></FontAwesomeIcon></span>
             <span><FontAwesomeIcon icon="trash" onClick={() => deleteHandle(todoid)}/></span>
             </div>
          </div>
            
             <div className= "issue-edit">
                <input type="text" onChange={textHandle} value={text} />
                <button onClick={() => saveHandle(todoid)}>Save</button>
                <button onClick={() => editHandle(false)}>Cancel</button>
             </div>

         </div>
        </div>
        </div>
        </>
        
    )
}

export default Issue
