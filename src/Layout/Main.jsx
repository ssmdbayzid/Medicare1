import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'



const Main = () => {
  return (
    <div>
        <Header />        
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main