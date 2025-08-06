import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
 const [loading, setLoading]=useState(true);
 const dispatch =useDispatch()

 useEffect(()=>{
  authService.getCurrentUser().
  then((userData)=>{
    if(userData)
    {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))

 },[])

  return  !loading ? (
    <div className='bg-gray-500 min-h-screen flex flex-wrap content-between'>
    <div className='block w-full'>
      <Header/>
      <main>
       ToDo: {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
    </div>
  ) : null
}

export default App
