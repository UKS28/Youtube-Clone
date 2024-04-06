import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import ErrorPage from './ErrorPage';


const Body = () => {
  const error=useSelector((state)=>state.app.error);
  
  if(error) return <ErrorPage/>

  return (
    <div className='flex '>
       <Sidebar />
       <Outlet/>
    </div>
  )
}

export default Body
