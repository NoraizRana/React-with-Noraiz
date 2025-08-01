import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import './App.css'

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

  return  !loading () : null;
}

export default App
