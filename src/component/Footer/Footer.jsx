import React from 'react'
import logo from '../../assets/images/logo.png'
import {AiFillYoutube, AiFillGithub, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'


// ============= Social Links ==============
const socialLink = [
  {
    path: "https://youtube.com/",
    icon: <AiFillYoutube className="w-5 h-5  group-hover:text-white" />
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="w-5 h-5  group-hover:text-white" />
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillFacebook className="w-5 h-5  group-hover:text-white" />
  },
  {
    path: "linkedin.com/",
    icon: <AiFillLinkedin className="w-5 h-5  group-hover:text-white" />
  },
]

// ============= Quick Links ==============

const quickLinks1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
]

const quickLinks2 = [
  {
    path: "/doctors",
    display: "Find A Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/contact",
    display: "Find Location",
  },
  {
    path: "/blog",
    display: "Get a Openion",
  },
]


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer  className="pb-16 mt-16">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-7">
          <div className="">
            <img src={logo} alt="" />
            <p className="text-md leading-7 font-[400] text-textColor mt-4">
              copyright  @ {year} developed by S S Md. Bayzid all right reserved.
            </p>
            <div className="flex  gap-3 items-center mt-4">
              {
                socialLink && socialLink.map((link, index)=>
                <Link to={link.path} 
                className="w-9 h-9 border-2 border-[#ededed] flex items-center justify-center rounded-full hover:bg-primaryColor hover:border-none hover:text-white"
                >{link.icon}</Link>)
              }
            </div>
            </div>
            {/* ============= Quick Links =============*/}

            <div className="text-[20px] leading-7 mb-6 text-textColor">
              <h2 className="text-lg leading-7 font-bold mb-6 text-textColor">
                Quick Links
              </h2>
              <ul>
                { quickLinks1 && quickLinks1.map((link, index)=> <li className='text-textColor text-[16px] leading-7 mb-5'>
                  <Link to={link.path}> {link.display}</Link>
                </li>)}
              </ul>
            </div>
            {/* ============= Short Link =============*/}

            <div className="text-[20px] leading-7 mb-6 text-textColor">
              <h2 className="text-lg leading-7 font-bold mb-6 text-textColor">
                Short Links
              </h2>
              <ul>
                { quickLinks2 && quickLinks2.map((link, index)=> <li className='text-textColor text-[16px] leading-7 mb-5'>
                 <Link to={link.path}> {link.display} </Link>
                </li>)}
              </ul>
            </div>
            {/* ============= Support =============*/}

            <div className="text-[20px] leading-7 mb-6 text-textColor">
              <h2 className="text-lg leading-7 font-bold mb-6 text-textColor">
                Supports
              </h2>
              <ul>
               <li className='text-textColor text-[16px] leading-7 mb-5'>
                Donate</li>
               <li className='text-textColor text-[16px] leading-7 mb-5'>
                Contact Us</li>
              </ul>
            </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer