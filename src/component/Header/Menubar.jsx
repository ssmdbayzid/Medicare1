import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../assets/images/logo.png'


const Menubar = ({navLinks, Button,  Modal, props}) => {
  return (
    // <!-- Main modal -->
<Modal
show={props.openModal === true}
position="left-right"
className=" bg-slate-300/50 md:hidden w-full">
    <Modal.Body>
    <div className=" p-6 w-full bg-white h-screen">
        <div className='flex justify-between'>
            <div>
                <img src={logo} alt="" className='w-full' />
            </div>
            <AiOutlineClose 
            onClick={()=> props.setOpenModal(!props.openModal)}
            className='text-2xl hover:text-red-600 hover:scale-110 ' />

        </div>
        
        <ul class="flex flex-col p-4 gap-8 mt-4 font-medium border-gray-100 rounded-lg  md:space-x-8 md:bg-white ">
      {
        navLinks.map((link, index)=> <li onClick={()=>props.setOpenModal(!props.openModal)} key={index}>
            <NavLink to={link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-lg leading-7 font-[600]" 
            : "text-textColor text-lg leading-7 font-[500]"}>
                {link.display}
            </NavLink>
        </li>)
      }
    </ul>
        </div>
        </Modal.Body>

      </Modal>
  )
}

export default Menubar

/*

<div class="items-center justify-between  w-full md:hidden" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {
        navLinks.map((link, index)=> <li key={index}>
            <NavLink to={link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-lg leading-7 font-[600]" 
            : "text-textColor text-lg leading-7 font-[500]"}>
                {link.display}
            </NavLink>
        </li>)
      }
    </ul>
  </div>

  */