import React from 'react'
import SideMenu from './components/SideMenu'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import TaskSummary from './features/tasks/components/TaskSummary'
import TaskList from './features/tasks/components/TaskList/TaskList'
import TaskProgress from './features/tasks/components/TaskProgress/TaskProgress'


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
        <TaskList />,
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskProgress />,
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