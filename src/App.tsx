import React from 'react'
import SideMenu from './components/SideMenu'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import TaskSummary from './features/tasks/components/TaskSummary'

const router = createBrowserRouter([
  {
    path: '/',
    element:  (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskSummary />,
      </div>
    ),
  },
  {
    path: 'task-list',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <h1>Task List</h1>
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <h1>Task Progress</h1>
      </div>
    ),
  },
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App