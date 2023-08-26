import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { Link, NavLink } from 'react-router-dom'

import {BiMenu} from 'react-icons/bi'
import Menubar from './Menubar'
// import useMediaQuery from '../../hooks/useMediaQuery'
import { Button, Modal } from 'flowbite-react';



const navLinks = [
  {
    path:"/home",
    display: "Home",
  },
  {
    path:"/doctors",
    display: "Doctors",
  },
  {
    path:"/services",
    display: "Services",
  },
  {
    path:"/contact",
    display: "Contact",
  },
]
const Header = () => {
  
  const [open, setOpen] = useState(false)
  

  // ============== Mobile Menu  ==============
  const [openModal, setOpenModal] = useState(false);
  const props = { openModal, setOpenModal };

  
  // =============== Header Scroll Show ===========
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')        
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()

    return window.removeEventListener('scroll', handleStickyHeader)
  },[])

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

    // const aboveMediumScreen = useMediaQuery("(min-width: 768px)")
  return (
     <div className="header relative flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= Logo ================= */}
          <div>
            <img src={logo} alt="" className="w-full" />
          </div>

          {/* ============= Menu ================= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index)=> <li key={index}>
                  <NavLink to={link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-lg leading-7 font-[600]" 
                  : "text-textColor text-lg leading-7 font-[500]"}>{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>

          {/* ============= Nev Right ================= */}
            <div className="flex items-center gap-4">
              <div>
                <Link  to="/">
                  <figure className="w-[44px] h-[44px] rounded-full cursor-pointer">
                    <img src={userImg} alt="" className="w-full rounded-full" />
                  </figure>
                </Link>
              </div>

                <Link  to="/login">
                  <button className="py-2 px-6 flex items-center text-white h-[44px] bg-primaryColor rounded-full cursor-pointer">
                    Log In
                  </button>
                </Link>
                <span className="md:hidden">
                  <BiMenu onClick={() => setOpenModal(!openModal)} className="w-10 h-10 cursor-pointer" />
                  
                </span>
            </div>
        </div>
      </div>
             
      {openModal && <Menubar  Button={Button} props={props} Modal={Modal}  navLinks={navLinks} />}

      


    </div>
    
  )
}

export default Header;