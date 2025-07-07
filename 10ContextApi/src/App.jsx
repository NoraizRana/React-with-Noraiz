import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
    <h1 className='bg-slate-600'>Hi I am Aiz</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
