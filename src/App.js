import React from 'react';
import IssueList from './Components/IssueList/IssueList.js'
import './App.css'
import HistoryList from './Components/HistoryList/HistoryList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee , faTrash ,faPen } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee , faTrash ,faPen )

function App() {
  return (
    <div className="container-issue">
      <IssueList />
      <HistoryList />
    </div>
  )
}

export default App;
