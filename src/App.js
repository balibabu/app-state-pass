import React from 'react'
import { GlobalProvider } from './GlobalContext'
import TaskLoggerApp from './components/TaskLoggerApp'
import AppControl from './AppControl'

export default function App() {
  return (
    <GlobalProvider>
      <TaskLoggerApp />
      <AppControl/>
    </GlobalProvider>
  )
}
